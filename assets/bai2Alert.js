  // Bài 2: Tạo 1 ô input và 1 button, nhập số vào, nhấn button thì alert số đó ra

$(document).ready(function(){
    $('#bai2-btn').on('click',function(){

        var value = $('#bai2-input').val();
        if($.isNumeric(value)){
            alert(value);
        }

    });
});