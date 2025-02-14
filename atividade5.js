function converterParaMaiusculas(str) {
    let mensagem = "Mensagem dentro da função";  
    return str.toUpperCase();  
}

let resultado = converterParaMaiusculas("teste");
console.log(resultado);  


try {
    console.log(mensagem);  
} catch (error) {
    console.log("Erro ao acessar mensagem fora da função:", error.message);
}

const converterParaMaiusculasArrow = (str) => {
    let mensagem = "Mensagem dentro da função (arrow)";
    return str.toUpperCase();
};

resultado = converterParaMaiusculasArrow("ola arrow");
console.log(resultado);  

try {
    console.log(mensagem);  
} catch (error) {
    console.log("Erro ao acessar mensagem fora da função (arrow):", error.message);
}
