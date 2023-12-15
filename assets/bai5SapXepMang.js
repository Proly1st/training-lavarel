//Bài 5: Sắp xếp mảng [6,9,1,15,22,33,2,83,67] mà không dùng hàm sort
$(function(){
    $('#bai5-btn').on('click',function(){
        let arr =  [6,9,1,15,22,33,2,83,67];
        let leng = arr.length;
        for( let i=0;i< leng-1; i++){
            swaped = false;
            for(let j=0; j<leng-i-1 ; j++){
                if( arr[j] > arr[j+1] ){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    
                    swaped = true;
                }
            }
            if(!swaped){
                break;
            }
        }
       
        $("#b5output").text("mảng sắp xếp tăng dần là: [ " +arr +" ]") ;
       
    });

});
