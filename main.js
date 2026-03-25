const { log } = require('node:console');

const prompt = require('prompt-sync')();

let numeros = []

for (let i = 0; i <= 2; i++) {
    let num = prompt("Ingrese un número: ");
    if (num === null){
        console.log("Número no aceptado. Intente de nuevo");
        
    } else if (num.trim() === '' || isNaN(Number(num))){
        console.log("Número no aceptado. Intente de nuevo");
        i--;
    } else {
        numeros.push(Number(num))
    }
    
}
// lista original con el operador spreed para crear una copia y que no sea una referencia.
let numeroOrdenados = [...numeros].sort((a, b) => a - b)

console.log(`Los números ordenados de menor a mayor son ${numeroOrdenados}`)
console.log(`Los número ordenados de mayor a menor son ${numeroOrdenados.reverse()}`)


// log
console.log(numeros);


/**
 * Intente de forma lógica recorrer el arreglo en un bucle y comparar los elementos.
 * Sin embargo, despues de verificar, observo que no se optimiza el recorrido
 * debido a que vuelve a comparar las mismas posiciones. 
 * 
 */
// let aux;
// for (let i = 0; i < numeros.length; i++) { 1
//     if (i === numeros.length -1 ) {
//         break;
//     }

//     for (let j = i + 1; j <= numeros.length; j++) { 2
//         if (numeros[i] > numeros[j]) {
//             aux = numeros[i]
//             numeros[i] = numeros[j]
//             numeros[j] = aux; 
//             i--;
//         }
//     }
// }

// [4, 45, 2]
let n = numeros.length

for (let i = 0; i < n; i++) {
    // Bucle interno: comparaciones (el -i es para no revisar lo que ya se ordenó al final)
    for (let j = 0; j < n - 1 - i; j++) {
        // Si el actual es mayor que el siguiente, se intercambian
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}
console.log(numeros);
