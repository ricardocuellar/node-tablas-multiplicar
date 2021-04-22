const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .check((argv, options) =>{
            if( isNaN(argv.b)){
                throw 'La base tiene que ser un número';
            }
            return true;
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            //demandOption: true,
            default: false,
            describe: 'Muestra tabla en consola'    
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que tabla quieres saber'
        })
        .argv;

module.exports = argv; //se queda porque es la exportación por defectoes el único.