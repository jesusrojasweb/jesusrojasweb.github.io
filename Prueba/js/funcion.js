$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.bt-menu').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('.ul').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.ul').animate({
				left: '-100%'
			});
		}
 
	});
 
};