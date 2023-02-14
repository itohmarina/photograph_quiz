/*global $*/
$(function () {
  $('.box').on('click', function(){
    $('#boxes .box-select').removeClass('.box-select')
    $(this).addClass('.box-select');
  });
});



$(function(){
  $("#true_choice_0").on('click',function(){
    $("#box_0").slideUp();
  });
});

$(function(){
  $("#true_choice_1").on('click',function(){
    $("#box_1").slideUp();
  });
});

$(function(){
  $('.box').mouseover(function(){
    $(this).addClass('box-ext');
  });
  $('.box').mouseout(function(){
    $(this).removeClass('box-ext');
  });
});

