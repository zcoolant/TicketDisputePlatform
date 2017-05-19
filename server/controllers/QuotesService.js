'use strict';

exports.addQuote = function(args, res, next) {
  /**
   * Creates a new quote for this case
   *
   * quote Quote Quote too add
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "caseId" : 123,
  "_id" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789,
  "lawyer" : {
    "phone" : "aeiou",
    "name" : "aeiou",
    "_id" : 1.3579000000000001069366817318950779736042022705078125,
    "email" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getQuoteById = function(args, res, next) {
  /**
   * Returns a quote based on a single ID
   *
   * id Integer ID of quote to fetch
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "caseId" : 123,
  "_id" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789,
  "lawyer" : {
    "phone" : "aeiou",
    "name" : "aeiou",
    "_id" : 1.3579000000000001069366817318950779736042022705078125,
    "email" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.quotesGET = function(args, res, next) {
  /**
   * Gets `quote` objects.
   *
   * caseId String Related case
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "price" : 1.3579000000000001069366817318950779736042022705078125,
  "caseId" : 123,
  "_id" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 123456789,
  "lawyer" : {
    "phone" : "aeiou",
    "name" : "aeiou",
    "_id" : 1.3579000000000001069366817318950779736042022705078125,
    "email" : "aeiou"
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

