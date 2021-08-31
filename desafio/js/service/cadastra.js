import CrudLivro from './crudLivro.js'


let modal = document.querySelector("#meuModal");
let span = document.getElementsByClassName("fechaModal")[0];

let form = document.querySelector('.form_componentes')
let btnLimpar = document.querySelector('.btnLimpar')
let msgModal = document.querySelector("textoModal"); 

form.addEventListener('submit', cadastraLivro)
btnLimpar.addEventListener('click', limpaPesquisa)

span.addEventListener('click', fechaModal)

function cadastraLivro(){
    let lbTitulo = document.querySelector('.titulo').value
    let lbAno = document.querySelector('.anoLancamento').value
    let lbAutor = document.querySelector('.autor').value
    let lbGenero = document.querySelector('.genero').value
    let lbEditora = document.querySelector('.editora').value
    let lbEdicao = document.querySelector('.edicao').value
    let lbStatus = document.querySelector('.status').value
    
    let objeto = JSON.stringify({
        "titulo": lbTitulo,
        "anoLancamento": lbAno,
        "autor": lbAutor,
        "genero": lbGenero,
        "editora":  lbEditora,
        "edicao": lbEdicao,
        "status":  lbStatus
    })

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); 
  
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: objeto,
        redirect: 'follow'
    };    

    let envio = new CrudLivro();
    envio.manusearLivro(requestOptions); 
    abreModal();
}


function abreModal(erro) {
    if(!erro){
        msgModal.innerText='Seu cadastro foi realizado!'
    }else{
        msgModal.innerText='Seu cadastro não foi realizado, pois houve um erro'
    }   
    modal.style.display = "block";
    limpaPesquisa();
}

function fechaModal(){   
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function limpaPesquisa(){ 
    lbTitulo.value = '';
    lbAutor.value = '';
    lbAno.value = '';
    lbGenero.value = '';
    lbEditora.value = '';
    lbEdicao.value = '';
    lbStatus.value = '';
}