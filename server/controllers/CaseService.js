'use strict';

exports.addCase = function(args, res, next) {
  /**
   * Creates a new case for this user
   *
   * _case Case Case too add
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "images" : [ "aeiou" ],
  "location" : "aeiou",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "id" : 123456789,
  "speed" : 123,
  "status" : "aeiou",
  "quotes" : [ 123 ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getCaseById = function(args, res, next) {
  /**
   * Returns a case based on a single ID
   *
   * id Integer ID of case to fetch
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "images" : [ "aeiou" ],
  "location" : "aeiou",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "id" : 123456789,
  "speed" : 123,
  "status" : "aeiou",
  "quotes" : [ 123 ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getCases = function(args, res, next) {
  /**
   * Gets `case` objects.
   *
   * userId String Identity of a user
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "images" : [ "aeiou" ],
  "location" : "aeiou",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "id" : 123456789,
  "speed" : 123,
  "status" : "aeiou",
  "quotes" : [ 123 ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

