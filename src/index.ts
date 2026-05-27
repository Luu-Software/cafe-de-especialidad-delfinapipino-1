 import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = 0; // COMPLETAR
let preciocompleto: number=Number(totalTexto)
let alumnos: number=Number(personasTexto)
if (esEstudiante === 'si') {
    preciocompleto=preciocompleto*0.9
}
totalPorPersona=preciocompleto/alumnos
console.log(`Total por persona: $${totalPorPersona}`);
