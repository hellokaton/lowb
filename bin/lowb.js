#!/usr/bin/env node
/**
 * Created by biezhi on 2017/8/11.
 */
var cmd     = require('commander');
var appInfo = require('../package.json');
var fs      = require('fs');
var path    = require('path');

var filepath = path.join(__dirname, '../data/animals.txt');
var animals  = fs.readFileSync(filepath).toString();
var sep      = '===============++++SEPERATOR++++====================\n';
animals      = animals.split(sep);

function randomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
}

cmd
    .version(appInfo.version)
    .option('-i, --index <n>', 'ascii art index, default is random', -1, parseInt)
    .parse(process.argv);

if (cmd.index == -1) {
    console.log(randomAnimal())
} else {
    console.log(animals[cmd.index])
}
