$("#m-footer-1").click(function(){
    $("#m-footer-1-sub").slideToggle();
  });

$("#m-footer-2").click(function(){
    $("#m-footer-2-sub").slideToggle();
  });
$("#m-footer-3").click(function(){
    $("#m-footer-3-sub").slideToggle();
  });


  $("#m-faq-item-1").click(function(){
    $("#m-faq-sub-1").slideToggle();
  });
  $("#m-faq-item-2").click(function(){
    $("#m-faq-sub-2").slideToggle();
  });
  $("#m-faq-item-3").click(function(){
    $("#m-faq-sub-3").slideToggle();
  });
  $("#m-faq-item-4").click(function(){
    $("#m-faq-sub-4").slideToggle();
  });
  $("#m-faq-item-5").click(function(){
    $("#m-faq-sub-5").slideToggle();
  });


$('#click-menu').click(function () { 
  isBool = true;
  if (!isBool) {
    //$('#change-icon').html("<i class='fas fa-time' id='change-icon'></i>");
    $("#change-icon").removeClass('fa-bars').addClass('fa-times');
    isBool = false;
  } else {
    // alert('hello');
        
        $('#change-icon').removeClass('fa-times').addClass('fa-bars');


       // $(this).find($("#change-icon")).removeClass('fa-times').addClass('fa-bars');
        isBool = true;
        
    }
    
});  