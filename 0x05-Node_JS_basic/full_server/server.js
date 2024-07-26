#!/usr/bin/node
// Creates a small Express server
import express from 'express';
import routesMapper from './routes/index';

const app = express();
const port = 1245;

routesMapper(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

export default app;
module.exports = app;
