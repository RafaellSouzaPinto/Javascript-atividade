let nome = "Rafael de Souza Pinto";  
let idade = 25;  
let aprovado = true;  
let notas = [9, 7.5, 8];  
let usuario = {  
    email: "rafaelsouza.rsrs14@gmail.com",
    senha: "Teste"
};

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Aprovado:", aprovado);
console.log("Notas:", notas);
console.log("Usuário:", usuario);



let valorNulo = null;  
let valorIndefinido;  

if (valorNulo === null) {
    console.log("valorNulo é null");
} else {
    console.log("valorNulo não é null");
}

if (valorIndefinido === undefined) {
    console.log("valorIndefinido é undefined");
} else {
    console.log("valorIndefinido não é undefined");
}
