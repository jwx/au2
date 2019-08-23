#!/usr/bin/env node
'use strict';

let au2;
// Require lib (local, for debugging) or dist (production)
try {
    au2 = require('../lib');
} catch (e) {
    au2 = require('../dist');
}

const { version } = require('../package.json');
console.log(`au2 v${version}\n`);

au2().catch(error => {
    console.error(error);
    process.exit(1);
});
