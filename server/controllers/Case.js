'use strict';

var url = require('url');

var Case = require('./CaseService');

module.exports.addCase = function addCase (req, res, next) {
  Case.addCase(req.swagger.params, res, next);
};

module.exports.getCaseById = function getCaseById (req, res, next) {
  Case.getCaseById(req.swagger.params, res, next);
};

module.exports.getCases = function getCases (req, res, next) {
  Case.getCases(req.swagger.params, res, next);
};
