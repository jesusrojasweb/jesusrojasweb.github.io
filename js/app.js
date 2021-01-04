let portafolioButtons = document.querySelectorAll('.portafolio-menu-item a');

for(const boton of portafolioButtons){
    boton.addEventListener('click',(e)=>{
        e.preventDefault();
    })
}

console.log()