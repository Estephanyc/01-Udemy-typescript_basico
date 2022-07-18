//Decoradores
//Una funcion que expande las clases añadiendole funcionalidades especiales

function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T){
        return class extends constructor {
            newProperty = "new property";
            hello = "override";
        }
    }


@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimit() {
        console.log('Hola mundo')
    }
}

console.log(MiSuperClase);
const miClase = new MiSuperClase();
console.log(miClase.miPropiedad)