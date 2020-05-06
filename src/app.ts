import express from 'express';

import connection from './database';
import routes from './routes/index.routes';

const app = express();

connection();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('server is running'));

export default app;
