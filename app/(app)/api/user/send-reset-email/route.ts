import { db } from "@/lib/db";
import { sendPasswordResetEmail } from "@/lib/email";
import { generatePasswordResetToken } from "@/lib/tokens";
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

    const resetToken = await generatePasswordResetToken(email);

    await sendPasswordResetEmail(resetToken.email, resetToken.token);

    return NextResponse.json(
      { message: "Password reset email sent" },
      { status: 201 }
    );
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
