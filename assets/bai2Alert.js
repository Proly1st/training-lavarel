  // Bài 2: Tạo 1 ô input và 1 button, nhập số vào, nhấn button thì alert số đó ra
  function btnclickBai2(){
    
    var inputValue = document.getElementById("bai2-input").value;
    if(inputValue === null || inputValue === undefined || inputValue === '' ){
        alert("Vui lòng nhập vào giá trị")
    }
    else if(!isNaN(inputValue)){
        alert(inputValue);

    }
}
