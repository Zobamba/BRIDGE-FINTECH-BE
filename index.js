import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './utils/database.js';
import routes from './routes/routes.js';

const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors({
  origin: '*'
}));

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to BRIDGE');
})

app.listen(port, () => {
  console.log(`Index app listening on port ${port}`);
})

routes(app);

dbConnection();
