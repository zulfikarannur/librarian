import bodyParser from 'body-parser';
import express from 'express';

import routes from './routes';

import { PORT } from './configs';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log('Express listening');
});
