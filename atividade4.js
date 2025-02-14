let opcao;

do {
    console.log("Menu:");
    console.log("A - Opção A");
    console.log("B - Opção B");
    console.log("S - Sair");

    opcao = prompt("Digite uma opção (A, B ou S):").toUpperCase();  

    switch(opcao) {
        case 'A':
            console.log("Opção A selecionada");
            break;
        case 'B':
            console.log("Opção B selecionada");
            break;
        case 'S':
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }
} while (opcao !== 'S');  