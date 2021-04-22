

// 5 x 1 = 5
// 5 x 2 = 10
// ... 
// 5 x 10 = 50


const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors')
console.clear();

//console.log(argv);
//console.log(process.argv);
// const [,,arg3 = 'base=1'] = process.argv;
// const [, base = 1] = arg3.split('=');
//const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado'))
    .catch(err => console.log(err));


