interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sherran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
console.log(volumen, segundo, cancion, autorDetalle)


// Destructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ p1, p2, p3 ] = dbz
console.log(p1, p2, p3)