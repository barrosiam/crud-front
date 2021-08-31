import Consulta from './consultaLivro.js'
import CrudLivro from './crudLivro.js'

    let lbId = document.querySelector('#pesquisa')
    let lbTitulo = document.querySelector('.titulo')
    let lbAno = document.querySelector('.anoLancamento')
    let lbAutor = document.querySelector('.autor')
    let lbGenero = document.querySelector('.genero')
    let lbEditora = document.querySelector('.editora')
    let lbEdicao = document.querySelector('.edicao')
    let lbStatus = document.querySelector('.status')

    let modal = document.querySelector(".modal");
    let span = document.getElementsByClassName("fechaModal")[0];
    let msgModal = document.querySelector('.textoModal')
    let btnAltera = document.querySelector('#btnAlterar')
    let btnConsulta = document.querySelector('#btnConsultar')
    let btnLimpar = document.querySelector('.btnLimpar')
    let btnDelete = document.querySelector('#btnDelete')
    let container = document.querySelector(".container__principal__consulta")

    btnConsulta.addEventListener('click', buscaLivro)
    btnLimpar.addEventListener('click', limpaPesquisa)
    span.addEventListener('click',fechaModal)

    console.log(lbId.value)

    function mostrarLivro(icMostra){       
            container.style.display = icMostra ? 'flex': 'none' 
         
            if(btnAltera){
                btnAltera.addEventListener('click', atualizaLivro)
                btnDelete.addEventListener('click', deletaLivro)
            }         
    }

    function livroEncontrado(busca){
        console.log(busca)
        lbTitulo.value = busca.titulo;
        lbAutor.value = busca.autor;
        lbAno.value= busca.anoLancamento;
        lbGenero.value = busca.genero;
        lbEditora.value = busca.editora;
        lbEdicao.value = busca.edicao;
        lbStatus.value = busca.status;
        mostrarLivro(true)
       
    }

    function buscaLivro(){
        let busca = new Consulta();
        if(lbId==null){
            abreModal()
        }
        busca.consultarLivro(lbId.value, livroEncontrado, abreModal);    
    }

    function limpaPesquisa(){
        lbId.value = '';
        lbTitulo.value = '';
        lbAutor.value = '';
        lbAno.value = '';
        lbGenero.value = '';
        lbEditora.value = '';
        lbEdicao.value = '';
        lbStatus.value = '';
    }


    function atualizaLivro(){    
    
        let objeto = JSON.stringify({
            "titulo": lbTitulo.value,
            "anoLancamento": lbAno.value,
            "autor": lbAutor.value,
            "genero": lbGenero.value,
            "editora":  lbEditora.value,
            "edicao": lbEdicao.value,
            "status":  lbStatus.value
        })

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
    
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: objeto,
            redirect: 'follow'
        };    

        let atualiza = new CrudLivro();
        atualiza.manusearLivro(requestOptions,lbId.value,abreModal,abreModal);      
    }

    function deletaLivro(){ 
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
    
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders, 
            redirect: 'follow'
        };    

        let atualiza = new CrudLivro();
        atualiza.manusearLivro(requestOptions,lbId.value); 
        window.location.href = "http://127.0.0.1:5500/html/";     
    }   

    function abreModal(sucesso,erro) {
        modal.style.display = "block";
       
        if(sucesso){
            msgModal.innerText='Seu cadastro foi realizado!'
        }else if(erro){
            msgModal.innerText= erro
        }   
        
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
    
