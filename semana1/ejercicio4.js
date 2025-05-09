const { ask } = require("../helpers/input");

function obtenerMayor(a,b) {
   

    if (a>b) {
        return a;
     }else{
        return b;
     }
}

async function main() {
    const num1= Number ( await ask("introduce el primer numero"))
    const num2= Number (await ask("introduce el segundo numero"))
    
    if (num1===num2) {
        console.log("los dos numeros que ingresaste son iguales")
    } else{
        const resultado=obtenerMayor(num1,num2);
        console.log("el numero mayor es:, el que pusiste puto");
    }
}

main()
