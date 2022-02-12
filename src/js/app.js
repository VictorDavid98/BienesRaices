document.addEventListener('DOMContentLoaded', function(){
    evenListeners();
    darkMode();
});
function darkMode(){
    const botonDark = document.querySelector('.dark-mode-boton');

    botonDark.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode')
    });
}
function evenListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');
}