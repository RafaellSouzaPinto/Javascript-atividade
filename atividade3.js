let numero = 3;  

if (numero > 0) {
    console.log(`${numero} é positivo.`);
} else if (numero < 0) {
    console.log(`${numero} é negativo.`);
} else {
    console.log(`${numero} é zero.`);
}

console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);  
}

let soma = 0;
let contador = 1;

while (contador <= 5) {
    soma += contador;
    contador++;
}

console.log("A soma dos números de 1 a 5 é:", soma);
