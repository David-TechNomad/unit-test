#!/usr/local/bin/node
if(process.argv.length !== 4) {
    console.log(`./sum.js x y`);
    process.exit(0);
}
let x = process.argv[2],
    y = process.argv[3];
const add = require('./add');
console.log(`${x} + ${y} = ${add(x, y)}`);