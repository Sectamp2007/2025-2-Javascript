// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffdays(actualDate, birthdate) {
    const diff = actualDate - birthdate;
    const edadEndias = Math.floor(diff / (1000 * 60 * 60 * 24));

    return edadEndias;
}
async function main() {
    const actualDate = new Date();

    const birthdateyear = await ask("¿cual es el dia de tu fecha de nacimiento?");
    const birthdatemonth = await ask("¿cual es el mes de tu fecha de nacimiento?");
    const birthdateday = await ask("¿cual es el año de tu fecha de nacimiento?");

    const birthdate = new Date(`${birthdateyear}-${birthdatemonth}-${birthdateday}`);

    console.log("haz un vivido aproximadamente:");
    const resultado = diffdays(actualDate, birthdate);
    console.log(`${resultado} dias`);

}

main();