'use strict';

module.exports = (req, res, next) => {
  req.log = 'this is a log';
  next();
};