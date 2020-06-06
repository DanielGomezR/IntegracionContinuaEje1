const express = require('express');
const dotenv = require('dotenv').config();
const Sentry = require('@sentry/node');

const api = require('./api');
const config = require('./config');

Sentry.init({ dsn: 'https://ef7ca8e673a7441193abe4f11d4985c2@o403580.ingest.sentry.io/5266416' });
const app = express();
app.use(express.json());
app.use('/api', api);

app.get('/', (req, res)=>{
    res
    .sendStatus(500);
});

const server = app.listen(process.env.PORT || config.port, config.host, ()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado en host ${host} puerto ${port} ...`);
});
