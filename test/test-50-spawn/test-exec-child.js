#!/usr/bin/env node

'use strict';

var assert = require('assert');
var cluster = require('cluster');

assert(!process.send);
assert(!cluster.worker);

console.log('Hello from exec-child!');
console.log('Args', JSON.stringify(process.argv.slice(2)));
