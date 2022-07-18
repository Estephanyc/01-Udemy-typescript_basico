let habilidaddes: string[] = ['Bash', 'Counter', 'Healing'];
habilidaddes.push('true')

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal? : string;
}
const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje)