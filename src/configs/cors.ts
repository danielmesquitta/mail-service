import { CorsOptions } from 'cors';
import { config as dotenv } from 'dotenv';

dotenv();

const whitelist = JSON.parse(String(process.env.CORS_WHITELIST)) as string[];

const corsConfig = {
  origin(origin, callback) {
    if (whitelist.indexOf(String(origin)) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
} as CorsOptions;

export default corsConfig;
