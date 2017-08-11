/**
 * Created by biezhi on 2017/8/11.
 */
var cmd = require('commander');
var appInfo = require('./package.json');
var fs = require('fs');
var path = require('path');


var animals = ['dog', 'pig', 'cow', 'elephant'];

function list() {
    console.log(animals.join(', '));
}

function show(value) {
    console.log('animal is %s', value);
}

cmd
    .version(appInfo.version)
    .option('-a, --animal <value>', 'animal type, default is random', 'random')
    .action(show)
    .option('-l, --list', 'show animal list', list)
    .parse(process.argv);


if(!cmd.list){
    console.log('animal %s', cmd.animal)

    var filepath = path.join(__dirname, 'data/animals.txt');
    var animals = fs.readFileSync(filepath).toString();
    var sep = '===============++++SEPERATOR++++====================\n';
    animals = animals.split(sep);
    // animals = animals.split(sep).map(pad);
    console.log(animals[0]);

}
