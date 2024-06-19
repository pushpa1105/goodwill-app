import {
  passwordResetEmailTemplate,
  verificationEmailTemplate,
} from "@/data/get-email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailInterface {
  subject: string;
  toEmail: string;
  html: string;
}

export const sendEmail = async ({
  subject,
  toEmail,
  html,
}: SendEmailInterface) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: toEmail,
    subject,
    html,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify?token=${token}`;

  await sendEmail({
    toEmail: email,
    subject: "Verify your email",
    html: verificationEmailTemplate(verificationLink),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const passwordResetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password/reset?token=${token}`;

  await sendEmail({
    toEmail: email,
    subject: "Reset your password",
    html: passwordResetEmailTemplate(passwordResetLink),
  });
};
