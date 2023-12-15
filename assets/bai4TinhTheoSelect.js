//Bài 4: Tạo 2 ô input, 1 select (+, -, *, /) và 1 button, nhập số vào 2 ô, chọn phép tính, nhấn  button thì hiện kết quả
function TinhTheoSelect(){
    var input1 = Number ( document.getElementById("b4input1").value);
    var input2 = Number ( document.getElementById("b4input2").value);

  
    var selectValue = document.getElementById("bai4-select").value;
    var sum=0;
    if(!isNaN(input1) && !isNaN(input2) && input1 !=0 && input2 !=0 ){
        if(selectValue ==="cong"){
            sum = input1+input2;
            
        }
      else  if(selectValue ==="tru"){
            sum = input1-input2;
           
        }
      else  if(selectValue ==="nhan"){
            sum = input1*input2;
            
        }
      else  if(selectValue ==="chia"){
            sum = input1/input2;
         
        }  
       
            alert(sum);
        
         
    }

}