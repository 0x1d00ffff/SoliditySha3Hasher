const utils = require('ethereumjs-util')

var args = process.argv.slice(2);
if (args.length < 1) {
    console.log('usage:', process.argv[0], process.argv[1], '<input hex string>');
    process.exit(1);
}

var input = process.argv[2];
if(input.substring(0, 2) == "0x") {
    input = input.substring(2);
}

var buffer = new Buffer( input, 'hex' );

console.log(utils.sha3(buffer).toString('hex'));

