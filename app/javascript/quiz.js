/*global $*/


$(function () {
  $(document).on('click', "#answer_box", function(){
    $('#answer_box').slideUp();
  });
});


$(function () {
  $(document).on('click', "#box_0", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_0').addClass('question_hide');
    $('#question_0').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_1", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_1').addClass('question_hide');
    $('#question_1').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_2", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_2').addClass('question_hide');
    $('#question_2').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_3", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_3').addClass('question_hide');
    $('#question_3').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_4", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_4').addClass('question_hide');
    $('#question_4').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_5", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_5').addClass('question_hide');
    $('#question_5').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_6", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_6').addClass('question_hide');
    $('#question_6').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_7", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_7').addClass('question_hide');
    $('#question_7').removeClass('question_hide');
    return false;
  });
});

$(function () {
  $(document).on('click', "#box_8", function(){
    $('#boxes .box-select').removeClass('box-select');
    $(this).addClass('box-select');
    $('.question_box').not('#question_8').addClass('question_hide');
    $('#question_8').removeClass('question_hide');
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
  $(document).on('click', "#true_chice_0", function(){
    $("#box_0").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_1", function(){
    $("#box_1").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_2", function(){
    $("#box_2").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_3", function(){
    $("#box_3").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_4", function(){
    $("#box_4").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_5", function(){
    $("#box_5").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_6", function(){
    $("#box_6").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_7", function(){
    $("#box_7").slideUp();
  });
});

$(function(){
  $(document).on('click', "#true_chice_8", function(){
    $("#box_8").slideUp();
  });
});



$(function(){
  $('.box').on( 'mouseover', function(){
    $(this).addClass('box-ext');
  })
  .on( 'mouseout', function(){
    $(this).removeClass('box-ext');
  });
});


