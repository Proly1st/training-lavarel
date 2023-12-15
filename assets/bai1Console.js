  // Bài 1: Tạo 1 ô input, nhập số vào thì console.log số đó ra

// code a Hiệp sửa

$(function(){
    $('#bai1-input').on('input paste', function(){
        console.log($(this).val());
    });


});


  //code k chuẩn
//   $(document).ready(function(){
//     $('#bai1-input').on('input paste', function(){
//         var value = $(this).val();
//         if($.isNumeric(value)){
//             console.log(value);
//         }
//     });
//   });
