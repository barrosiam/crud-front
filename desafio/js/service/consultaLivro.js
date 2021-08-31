// class Consulta {
//   consultarLivro(tbId, sucesso, falha) {
//     const url = `http://localhost:3000/cadastros/${tbId}`;

//     fetch(url)
//       .then(function (resposta) {
//         return resposta.json();
//       })
//       .then(function (dados) {
//         sucesso(dados);
//       })
//       .catch(function (erro) {
//         console.log(erro);
//       });
//   }
// }

// export default Consulta;

class Consulta {
  consultarLivro(tbId, sucesso, falha) {
    const url = `http://localhost:3000/cadastros/${tbId}`;

    fetch(url)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (dados) {
        sucesso(dados);
      })
      .catch(function (erro) {
        falha(false,'Seu cadastro não foi realizado, pois houve um erro');
      });
  }
}

export default Consulta;

