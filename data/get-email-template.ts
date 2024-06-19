export const companyLogo = `${process.env.NEXT_PUBLIC_APP_URL}//goodwill-logo.png`;

export const verificationEmailTemplate = (link: string) => {
  return `
<html>
<head>
    <meta charset="UTF-8">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            width: 50px;
        }
        .content {
            margin: 20px 0;
        }
        .content p {
            font-size: 16px;
            color: #333333;
        }
        .content a {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="${companyLogo}" alt="Company Logo">
        </div>
        <div class="content">
            <p>Hi,</p>
            <p>Thank you for registering with us. Please click the button below to verify your email address:</p>
            <a href="${link}" target="_blank">Verify Email</a>
            <p>If you did not create an account, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Goodwill Inc All rights reserved.</p>
        </div>
    </div>
</body>
</html>

    `;
};

export const passwordResetEmailTemplate = (link: string) => {
    return `
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Reset your Pasword</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              padding: 10px 0;
          }
          .header img {
              width: 50px;
          }
          .content {
              margin: 20px 0;
          }
          .content p {
              font-size: 16px;
              color: #333333;
          }
          .content a {
              display: inline-block;
              padding: 10px 20px;
              margin-top: 20px;
              background-color: #007BFF;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
          }
          .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #777777;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <img src="${companyLogo}" alt="Company Logo">
          </div>
          <div class="content">
            <h1>Reset your Pasword</h1>
              <p>Hi,</p>
              <p>Please click the button below to reset password:</p>
              <a href="${link}" target="_blank">Reset Password</a>
              <p>If you did not iniate this action, please ignore this email.</p>
          </div>
          <div class="footer">
              <p>&copy; 2024 Goodwill Inc. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  
      `;
  };
