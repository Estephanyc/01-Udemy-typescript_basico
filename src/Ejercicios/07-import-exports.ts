import { Producto, calculaISV } from '../Ejercicios/06-desestructuracion_argumentos';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
]

const [total, isv] = calculaISV(carritoCompras);


console.log(total)