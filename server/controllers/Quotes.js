'use strict';

var url = require('url');

var Quotes = require('./QuotesService');

module.exports.addQuote = function addQuote (req, res, next) {
  Quotes.addQuote(req.swagger.params, res, next);
};

module.exports.getQuoteById = function getQuoteById (req, res, next) {
  Quotes.getQuoteById(req.swagger.params, res, next);
};

module.exports.quotesGET = function quotesGET (req, res, next) {
  Quotes.quotesGET(req.swagger.params, res, next);
};
