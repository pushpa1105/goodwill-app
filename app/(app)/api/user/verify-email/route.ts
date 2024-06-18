import { getVerificationTokenByToken } from "@/data/get-verification-token";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import { generateVerificationToken } from "@/lib/tokens";
import { NextResponse } from "next/server";
import * as z from "zod";

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const { token } = values;

    const tokenData = await getVerificationTokenByToken(token);

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

    if (existingUser.emailVerified) {
      return new NextResponse("Email already verified", {
        status: 302,
      });
    }

    const verifiedUser = await db.user.update({
      where: {
        email: tokenData.email,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    await db.verificationToken.delete({
      where: { id: tokenData.id },
    });

    return NextResponse.json(
      { message: "Email has been verified succesfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
