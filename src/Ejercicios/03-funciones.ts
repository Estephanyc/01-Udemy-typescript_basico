function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a, b): number => {
   return a + b;
}

const resultado = sumar(4, 9);
console.log(resultado)

// Primero van los obligatorios, despues los opciones y despues los que tienen un valor por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
   return numero * base;
}