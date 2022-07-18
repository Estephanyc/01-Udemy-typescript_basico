export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'ipad Air',
    precio: 1500
}

const ipad: Producto = {
    desc: 'ipad Air',
    precio: 1500
}

export function calculaISV(productos: Producto[]) {
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, ipad];
const [ total, isv] = calculaISV(articulos)
console.log(total, isv)
