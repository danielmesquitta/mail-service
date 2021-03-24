import { config as dotenv } from 'dotenv';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

dotenv();

const mailConfig = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  secure: false,
  tls: {
    rejectUnauthorized: true,
  },
} as SMTPTransport.Options;

export default mailConfig;
