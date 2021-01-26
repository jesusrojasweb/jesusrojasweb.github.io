let portafolioButtons = document.querySelectorAll('.portafolio-menu-item a');

for(const boton of portafolioButtons){
    boton.addEventListener('click',(e)=>{
        e.preventDefault();
    })
}

let $burgerButton = document.querySelector('.burger')
let $menu = document.querySelector('.header-menu')
let $headerMenuList = document.querySelectorAll('.header-menu a')
let $footerMenuList = document.querySelectorAll('.footer-informacion-social a')
let $header = document.querySelector('header')

if(viewportWidth <= 500){
    $burgerButton.addEventListener('click',()=>{
        $menu.classList.toggle('active')
    })

    document.addEventListener('scroll', (e)=>{
        let top = body.getBoundingClientRect().top
    
        if(top < -60 ){
            $header.classList.add('active')
        }
        if(top >= -60){
            $header.classList.remove('active')
        }
    })
}else{

    menuButtonToBanner($headerMenuList[0],01)
    menuButtonToBanner($headerMenuList[1],02)
    menuButtonOutBanner($headerMenuList[2])
    menuButtonToBanner($footerMenuList[0],01)
    menuButtonToBanner($footerMenuList[1],02)
    menuButtonOutBanner($footerMenuList[2])
    
    function menuButtonToBanner(button, to){
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            smoothScroll($body, 1000);
            handleSiguiente(to)
        })
    }

    function menuButtonOutBanner(button) {
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(button)
            let to = button.attributes.href.value.split('#')[1]
            outBanner(to)
        })
    }
}
