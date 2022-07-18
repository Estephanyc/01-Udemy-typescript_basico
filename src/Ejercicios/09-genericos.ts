//Tipo genericos <T>

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soy = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9])

// Se especiica el tipo que se quiere recibir de vuelta
let soyExplicito = queTipoSoy<number>(100);