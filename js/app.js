$(window).scroll(function() {
  	var topOfWindow = $(window).scrollTop();
  	$('#top').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow) {
        $('#navbar').addClass('active');
        console.log("Se cumplio")
      }
      if(topOfWindow == 0){
        $('#navbar').removeClass('active');
        
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
})