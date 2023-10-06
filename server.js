'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

const app = express();

const PORT = 3001;

app.get('/', logger, (req, res, next) => {
  res.status(200).send(req.log);
});

app.get('/bad', (req, res, next) => {
  next('we have an error');
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

module.exports = { start, app };
