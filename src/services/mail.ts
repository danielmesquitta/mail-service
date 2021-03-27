import nodemailer from 'nodemailer';

import { mailConfig } from '~/configs';

const transporter = nodemailer.createTransport(mailConfig);

interface SendMail {
  from: string;
  to: string | string[];
  subject: string;
  text: string;
}

const sendMail = async ({
  from,
  to,
  subject,
  text,
}: SendMail): Promise<void> => {
  await transporter.sendMail({
    from: `${from} <${mailConfig.auth?.user}>`,
    to,
    subject,
    text,
  });
};

export default { sendMail };
