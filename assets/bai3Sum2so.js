
// Bài 3: Tạo 2 ô input và 1 button, nhập số vào 2 ô, nhấn button thì alert tổng 2 số
//code chuẩn
$(function(){
    $('#bai3-btn').on('click',function(){
        let input1= parseInt( $('#input1').val()) ||0,  input2= parseInt($('#input2').val())||0;
        alert(input1+input2);
    });
});












// code k chuẩn
// $(document).ready(function(){
//     $('#bai3-btn').on('click',function(){

//         var input1= Number($('#input1').val());
//         var input2= Number( $('#input2').val());
       
        
//         if(input1 !=0 && input2!=0 && !isNaN(input1) && !isNaN(input2)){
//              var sum = input1+input2;
//              alert(sum);
//         }

//     });
 
// });
