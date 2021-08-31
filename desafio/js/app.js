const btnMobile = document.getElementById('btn_mobile');

function openMenu(event) {
    const menu = document.querySelector('.cabecalho_menu');
    if (event.type === 'touchstart') event.preventDefault();
    if(menu.classList.contains('active')){
       return menu.classList.remove('active');
    }    
    menu.classList.add('active');    
}

btnMobile.addEventListener('click', openMenu);
btnMobile.addEventListener('touchstart', openMenu);