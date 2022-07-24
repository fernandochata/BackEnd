import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import routerV1 from './routes/task.v1.routes.js'
import routerV2 from './routes/task.v2.routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/', routerV1);
app.use('/api/v2/', routerV2);

app.set('port', process.env.PORT || 3000);

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => { res.render('index') })


export default app;