  // Bài 1: Tạo 1 ô input, nhập số vào thì console.log số đó ra
  
    document.addEventListener("DOMContentLoaded", function() {
        var inputElement = document.getElementById("bai1-input");

        inputElement.addEventListener("input", function(event) {
            var inputValue = event.target.value;
            if (!isNaN(inputValue)) {
                console.log(inputValue);
            }
        });

        inputElement.addEventListener("paste",function(event){
            var inputValue = event.target.value;
            if(!isNaN(inputValue)){
                console.log(inputValue);
            }
        });
    });

