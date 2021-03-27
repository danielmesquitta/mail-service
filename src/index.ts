import cors from 'cors';
import { config as dotenv } from 'dotenv';
import express from 'express';

import { corsConfig } from './configs';
import routes from './routes';

dotenv();

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(routes);

app.listen(process.env.PORT || 3333);
