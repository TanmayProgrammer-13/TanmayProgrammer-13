$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });

// smooth scroling
$('a[href*="#"]').click('click',function(e){

e.preventDefault();

$('html, body').animate({

scrollTop: $($(this).attr('href')).offset().top,

},
500,
'linear'
);

});

});
function myFunction(){
  alert("Thanks Your Email Was Sent!")
}
