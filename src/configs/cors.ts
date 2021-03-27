import { CorsOptions } from 'cors';

const whitelist = ['https://danielmesquitta.vercel.app'];

const corsConfig = {
  origin: (origin, callback) => {
    if (
      whitelist.indexOf(String(origin)) !== -1 ||
      whitelist.indexOf(`${origin}/`) !== -1
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
} as CorsOptions;

export default corsConfig;
