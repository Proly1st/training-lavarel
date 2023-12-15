
// bai 3 alert tổng 2 số a b từ 2 input
function btnSum(){
    var input1 = Number( document.getElementById("input1").value);
    var input2 = Number( document.getElementById("input2").value);
    if(input1 === null || input1 === undefined || input1 === '' ||input2 === null || input2 === undefined || input2 === ''){
        alert("Vui lòng nhập vào giá trị")
    }
    else if(!isNaN(input1) && !isNaN(input1)  ){
         var sum = input1+input2;
         alert( "Tổng 2 số là: "+ sum);
    }
    
   
}
