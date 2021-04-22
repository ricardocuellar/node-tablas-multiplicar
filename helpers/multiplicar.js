//Privado
const fs = require('fs');
const colors  = require('colors/safe')

const crearArchivo = async ( base=5, listar, limite ) =>{

    try{
        let valor;
        let salida, consola = '';

        for(let i = 1; i <=limite; i++){
            valor = base*i;
            salida +=  `${base} ${'*'} ${i} = ${valor}\n`;
            consola +=  `${colors.bold.blue(base)} ${colors.green('*')} ${colors.bold.blue(i)} = ${valor}\n`;

        }

        if(listar === true){
            console.log(consola);
        }


        //si hay error usamos try-catch
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida,)

        return `tabla-${base}.txt creado`;
    }catch(err){
        return err;
    }

    
}

module.exports = {
    crearArchivo,
    //crearArchivo: crearArchivo,

}