import { getPasswordResetTokenByToken } from "@/data/get-password-reset-token";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const { token, password } = values;

    const tokenData = await getPasswordResetTokenByToken(token);

    if (!tokenData) {
      return new NextResponse("No token found.", {
        status: 404,
      });
    }

    if (tokenData?.expires! < new Date()) {
      return new NextResponse("Token has been expired.", {
        status: 302,
      });
    }

    const existingUser = await db.user.findUnique({
      where: {
        email: tokenData.email,
      },
    });

    if (!existingUser) {
      return new NextResponse("User with this email not found", {
        status: 404,
      });
    }

    const hashedPassword = await hash(password, 10);

    const verifiedUser = await db.user.update({
      where: {
        email: tokenData.email,
      },
      data: {
        password: hashedPassword,
      },
    });

    await db.passwordResetToken.delete({
      where: { id: tokenData.id },
    });

    return NextResponse.json(
      { message: "Password changed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
