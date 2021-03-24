import nodemailer from 'nodemailer';

import { mailConfig } from '~/configs';

const transporter = nodemailer.createTransport(mailConfig);

interface SendMail {
  to: string | string[];
  subject: string;
  htmlBody: string;
}

const sendMail = async ({ subject, to, htmlBody }: SendMail): Promise<void> => {
  await transporter.sendMail({
    subject,
    from: `Daniel Mesquita <danielmesquitta123@gmail.com>`,
    to,
    html: htmlBody,
  });
};

export default { sendMail };
