/* ---------- Scroll ----------*/
/*
$(window).scroll(function() {
  	var topOfWindow = $(window).scrollTop();
  	$('#top').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow) {
        $('#burguer').addClass('active');
      }
    });
  	$('#habilidades').each(function(){
  		var imagePos = $(this).offset().top;
	    var topOfWindow = $(window).scrollTop();

	      if (imagePos < topOfWindow) {
	      	$('.noventa').css('width', '90%');
	      	$('.ochenta').css('width', '80%');
	      	$('.sesenta').css('width', '60%');

	      }
  	})
})*/
/* ---------- Menu ----------*/
/*var consulta = window.matchMedia('(max-width: 500px)');
var $burguerButton = document.getElementById('burguer');
  var $menu = document.getElementById('menu');
  function toggleMenu(){
    $menu.classList.toggle('active');
  };
  function showMenu(){
    $menu.classList.add('active');
  };
  function hideMenu(){
    $menu.classList.remove('active');
  };

  function mediaQuery() {
    if (consulta.matches) {
      // si se cumple hagamos esto
      console.log('se cumplió la condicion');
      $burguerButton.addEventListener('touchstart', toggleMenu);
    } else {
      $burguerButton.removeEventListener('touchstart', toggleMenu);
      // si no se cumple hagamos esto
      console.log('no se cumplió la condicion');
    }
  }
  mediaQuery();
  /* ---------- Hammer ----------*/
  /*var $body = document.body;

  var gestos = new Hammer($body);
  gestos.on('swipeleft', showMenu);
  gestos.on('swiperight', hideMenu);
/* ---------- Blazy ----------*/
var bLazy = new Blazy({
  selector: 'img'
});
 //Ver mas
/*$('#JesusEdu-list-mas').on('click', function(e){
   e.preventDefault();
   console.log(this);

   verMas(this);
})
 function verMas(a) {
   $('.oculto').removeClass('oculto').addClass('aparecer');
   $('#'+a.id).addClass('oculto');

<<<<<<< HEAD
 }
=======
 }*/