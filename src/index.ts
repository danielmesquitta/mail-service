import 'dotenv';
import cors from 'cors';
import express from 'express';

import { corsConfig } from './configs';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(routes);

app.listen(process.env.PORT || 3333);
