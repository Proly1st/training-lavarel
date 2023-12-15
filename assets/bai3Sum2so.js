
// Bài 3: Tạo 2 ô input và 1 button, nhập số vào 2 ô, nhấn button thì alert tổng 2 số
function btnSum(){
    var input1 = Number( document.getElementById("input1").value);
    var input2 = Number( document.getElementById("input2").value);
    if(input1 === null || input1 === undefined || isNaN(input1) ||input2 === null || input2 === undefined || isNaN(input2) || input1===0 || input2==0){
        alert("Vui lòng nhập vào giá trị")
        
       
    }
   else 
   if(!isNaN(input1) && !isNaN(input2)&& input1!=0 && input2 !=0  ){
        var sum = input1+input2;
        alert( "Tổng 2 số là: "+ sum);
       
   }
    
   
}
