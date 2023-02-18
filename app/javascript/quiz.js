/*global $*/


$(function () {
  $('#answer').on('click', function(){
    $('#answer_box').slideUp();
  });
});

$(function () {
  $("#box_0").on('click', function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_0').addClass('question_hide');
    $('#question_0').removeClass('question_hide');
    return false;
  });
});

// $(function () {
//   for (var i=0; i<9; i++) {
//     // $(function () {
//       // 'use strict';
//       // var num ='n';
//       $("#box_"+i).on('click', function(){
//         $('#boxes .box-select').removeClass('box-select');
//         $(this).addClass('box-select');
//         // var
//         //   str = $(this).attr("id"),
//           // num = str.match(/\d/g).join("");
//         $('.question_box').addClass('question_hide');
//         $('#question_'+i).show();
//         return false;
//       });
//     // });
//   }
// });

// $(function () {
//   $("#boxes > div").on('click', function(){
//     $('#boxes .box-select').removeClass('box-select');
//     $(this).addClass('box-select');
//     var className = $(this).attr('class');
//     $(className).removeClass('question_hide');
//   });
// });


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

