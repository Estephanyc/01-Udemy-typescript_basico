class personaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}

class Heroe extends personaNormal{
    /*   private alterEgo: string;
        public edad: string;
        static nombreReal: number;
    */
        
    //private: solo se puede acceder a ella en esta clase
    //public:  Desde afuera de la clase de puede acceder a esa propiedad
    //Static: se puede acceder a ella sin instanciar la clase
    //por defecto las clases son publicas

    constructor(
        public alterEgo: string,
        public nombreReal: string,
        public edad?: number
        ) {
        //this.alterEgo = alterEgo;
        super( nombreReal, 'New york');
    }
}



const iroman = new Heroe('Ironman', 'Tony', 45);
console.log(iroman)