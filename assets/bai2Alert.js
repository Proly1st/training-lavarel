  // bai 2 hien alert khi click vao button
  function btnclickBai2(){
    
    var inputValue = document.getElementById("bai2-input").value;
    if(inputValue === null || inputValue === undefined || inputValue === '' ){
        alert("Vui lòng nhập vào giá trị")
    }
    else if(!isNaN(inputValue)){
        alert(inputValue);

    }
}
