import nodemailer from 'nodemailer';

import { mailConfig } from '~/configs';

const transporter = nodemailer.createTransport(mailConfig);

interface SendMail {
  to: string[];
  subject: string;
  text: string;
}

const sendMail = async ({ subject, to, text }: SendMail): Promise<void> => {
  await transporter.sendMail({
    subject,
    from: `Daniel Mesquita <${mailConfig.auth?.user}>`,
    to,
    text,
  });
};

export default { sendMail };
