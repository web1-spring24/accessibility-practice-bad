


$(".faq-question-span").click(function () {
  $(this).parents(".faq-question").children("p").slideToggle(500);
  $(this)
    .parents(".faq-question")
    .children(".faq-button")
    .toggleClass("closed open");
});

 $('button#yes').click(function(){
    $('#popup-container').css('display', 'none');
 });