// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

async function main() {
  const name = await ask("¿Cómo te llamas? ");
  const age = Number(await ask("¿Cuántos años tienes? "));
  const comida = await ask("¿Cuál es tu comida favorita? ");
  console.log("Hola " + name + ", tienes " + age + " años, y tu comida favirita es: " + comida);
}
 async function main(){
  let i = i
  while(i <=10){
    console.log(i);
    i++;
  }
  i=10
  while (i>=0){
    console.log(i);
    i--;
  }
 }

 const frutas=["fresas","mango","kiwi","manzaa","uvas"]
 const cajon=Number(await ask("¿que cajon quieres abrir? (1-5)"));

 for(let j = 1; j <=5; j++){
  if(j===cajon){
    console.log("en el cajon hay;", frutas[j-1]);
  }
 }
main();