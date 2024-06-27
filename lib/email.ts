import Mailjet from "node-mailjet";
import {
  passwordResetEmailTemplate,
  verificationEmailTemplate,
} from "@/data/get-email-template";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_PUBLIC_KEY!,
  process.env.MAILJET_API_PRIVATE_KEY!,
  {
    config: {},
    options: {},
  }
);

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
  const request = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "projectinfo1105@gmail.com",
          Name: "Pushpa Lama",
        },
        To: [
          {
            Email: toEmail,
            Name: toEmail
          },
        ],
        Subject: subject,
        HTMLPart: html,
      },
    ],
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
