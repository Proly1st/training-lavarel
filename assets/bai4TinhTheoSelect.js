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

