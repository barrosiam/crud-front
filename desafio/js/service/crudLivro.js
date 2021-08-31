class CrudLivro {
    manusearLivro(requestOptions, id, sucesso, falha) {
     
      let url = `http://localhost:3000/cadastros`;
      if(id){
        url+= `/${id}`;
      }
     
      fetch(url,requestOptions)
        .then((resposta) =>
            resposta.json()
        )
        .then((dados) => {
            sucesso(dados)
        })
        .catch((erro)  =>{
           falha(erro);
        });
    }
  }  
  export default CrudLivro;
