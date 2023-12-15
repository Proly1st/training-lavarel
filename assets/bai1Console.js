  //bai1 hien console khi nhap so
  
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

