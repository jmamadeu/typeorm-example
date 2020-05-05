import express from 'express';

import { createConnection } from 'typeorm';

const app = express();

// createConnection().then((connection) => {
// });
app.use(express.json());

app.listen(3333, () => console.log('server is running'));

export default app;
