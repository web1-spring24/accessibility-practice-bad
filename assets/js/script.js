


$('.faq-question').click(function(){
    $(this).children("p").slideToggle(500); 
    $(this).children("#faq-button").toggleClass("closed open");
 });

 $('button#yes').click(function(){
    $('#popup-container').css('display', 'none');
 });