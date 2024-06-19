import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import { generateVerificationToken } from "@/lib/tokens";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { getUser } from "@/app/(app)/api/_utils/get-user";
import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const { username: name, email, password } = userSchema.parse(values);

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("User with this email already exits", {
        status: 302,
      });
    }

    const hashedPassword = await hash(password, 10);

    const user = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    const { password: newUserPassword, ...rest } = user;

    return NextResponse.json(
      { user: rest, message: "Verification Email sent" },
      { status: 201 }
    );
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = await getUser();
    const values = await req.json();

    const existingUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!existingUser) {
      return new NextResponse("User not found", { status: 404 });
    }
    console.log(values.password);

    if (values?.password) {
    console.log(values.password);
      const hashedPassword = await hash(values.password, 10);
      values.password = hashedPassword;
    }

    console.log(values.password);
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
