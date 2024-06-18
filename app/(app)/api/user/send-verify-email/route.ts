import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import { generateVerificationToken } from "@/lib/tokens";
import { NextResponse } from "next/server";
import * as z from "zod";

const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const { email } = userSchema.parse(values);

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return new NextResponse("User with this email not found", {
        status: 404,
      });
    }

    if (existingUser.emailVerified) {
      return new NextResponse("Email already verified", {
        status: 302,
      });
    }

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return NextResponse.json(
      { message: "Verification Email sent" },
      { status: 201 }
    );
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
