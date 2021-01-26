let $banner = document.getElementById('banner')
let $bannerItems = $banner.children
let $bannerButtons = document.querySelectorAll('.banner-button')
let $body = document.getElementById('body')
let bannerLength = $bannerItems.length;
let bannerActive = true
let viewportWidth = window.innerWidth

if(viewportWidth > 500){

  document.addEventListener('wheel',handleScroll);
} else{
  $body.classList.add('active')
}


function handleScroll(e) {
  
  let top = body.getBoundingClientRect().top

  if(top === 0){
    $body.classList.remove('active')
    bannerActive = true
  }
  
  if(bannerActive){

    if(e.deltaY < 0){
      banner(false)
    }
    if(e.deltaY > 0){
      banner(true)
    }
  }
}

for(const boton of $bannerButtons){
  boton.addEventListener('click',(e)=>{
    let opcion = e.path[0].innerText -1
    handleSiguiente(opcion)
  })
}

function banner(opcion){
  
  for(let i = 0; i < bannerLength; i++){
    let next;
    let itemClassActive = $bannerItems[i].classList[2]
    if(itemClassActive){

      if(opcion){
        next = i + 1
      }
  
      if(!opcion){
        next = i -1
      }

      if(next >= bannerLength){
        outBanner('portafolio')
        break
      }
      if(next < 0){
        next = 0;
      }
      
      handleSiguiente(next)
      break
    }

  }
}

function handleSiguiente(opcion) {
  removerAllActive()
  $bannerItems[opcion].classList.add('active')
  $bannerButtons[opcion].classList.add('active')
}

function removerAllActive() {

  removeClassItem($bannerItems)
  removeClassItem($bannerButtons)

}
function removeClassItem(padre) {
  for(const item of padre){
    item.classList.remove('active')
  } 
}

function outBanner(to) {
  body.classList.add('active')
  bannerActive = false
  smoothScroll(to, 1000);
}