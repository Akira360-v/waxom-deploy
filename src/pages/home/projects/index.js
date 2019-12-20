$('#up').on('click', function(e){
  e.preventDefault;
	$('.blocks-projects').removeClass('dn');
	$("#delit").toggleClass('dn');
	$('.blocks-projects').fadeOut(300);
});