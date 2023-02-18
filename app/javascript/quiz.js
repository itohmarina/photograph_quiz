/*global $*/
$(function () {
  $('#answer').on('click', function(){
    $('#answer_box').slideUp();
  });
});

$(function () {
  for (var i=0; i<9; i++){
    $("#box_"+i).on('click', function(){
      $('#boxes .box-select').removeClass('box-select');
      $(this).addClass('box-select');
      $('#question_'+i).show();
      return false;
  });
  }
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


$(document).ready(function(){
  $('.box').mouseover(function(){
    $(this).addClass('box-ext');
  });
  $('.box').mouseout(function(){
    $(this).removeClass('box-ext');
  });
});

