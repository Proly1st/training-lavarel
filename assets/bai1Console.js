  // Bài 1: Tạo 1 ô input, nhập số vào thì console.log số đó ra

  $(document).ready(function(){
    
    $('#bai1-input').on('input paste', function(){
        var value = $(this).val();

        if($.isNumeric(value)){
            console.log(value);
        }

    });

    

  });

