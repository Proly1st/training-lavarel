//Bài 4: Tạo 2 ô input, 1 select (+, -, *, /) và 1 button, nhập số vào 2 ô, chọn phép tính, nhấn  button thì hiện kết quả

$(function(){
    $('#bai4-btn').on('click', function(){
    let input1 = parseInt($('#b4input1').val()),input2 = parseInt($('#b4input2').val());     
    let result=0;
    switch($('#bai4-select').val()){
        case 'cong':
            result=input1+input2;
            break;
        case 'tru':
            result=input1-input2;
            break;
        case 'nhan':
            result=input1 *input2;
            break;
        case 'chia':
            result =input1/ input2;
            break;
    }   
    alert(result);
    });
});


//code lỏ =))
// lỗi sai chỉ dùng if else khi kiểm tra không xác định thì mới duyệt qua từng điều kiện
// bài này đã xác định nên dùng switch case
// $(document).ready(function(){
//     $('#bai4-btn').on('click', function(){
//         var input1= Number($('#b4input1').val());
//         var input2= Number( $('#b4input2').val());
//         var selectValue = $('#bai4-select').val();
//         var sum=0;
//         if(!isNaN(input1) && !isNaN(input2) && input1 !=0 && input2 !=0 ){
//             if(selectValue ==="cong"){
//                 sum = input1+input2;
//             }
//           else  if(selectValue ==="tru"){
//                 sum = input1-input2;
//             }
//           else  if(selectValue ==="nhan"){
//                 sum = input1*input2;
      
//             }
//           else  if(selectValue ==="chia"){
//                 sum = input1/input2;
             
//             }  
//             alert(sum);
//         }
//     });
// });