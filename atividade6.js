function processarDados(callback) {
  console.log("Processando dados...");
  callback();
}

function buscarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: "Rafael", id: 1 });
    }, 1000);
  });
}

processarDados(() => {
  console.log("Processo concluído");
});

buscarUsuario().then((usuario) => {
  console.log("Usuário encontrado:", usuario);
});
