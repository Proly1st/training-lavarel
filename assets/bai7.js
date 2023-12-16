//Bài 7: Viết đồng hồ đếm ngược với sự kiện setinterva
// bài 7 đang lỗi
$(function(){
    $('#b7-btn').on('click',function(){
        let input = $('#b7InputTime').val();
       
        let coutdownTime = input.split(':');
        let gio = parseInt(coutdownTime[0]);
        let phut =  parseInt(coutdownTime[1]);
        let giay = parseInt(coutdownTime[2]);

        let countdownInterval = setInterval(function(){
            if (giay > 0) {
                giay--;
              } else {
                if (phut > 0) {
                  phut--;
                  giay = 59;
                } else {
                  if (gio > 0) {
                    gio--;
                    phut = 59;
                    giay = 59;
                  } else {
                    clearInterval(countdownInterval);
                    alert('Đếm ngược đã kết thúc!');
                  }
                }
            }

            let formatTime= gio.toString().padStart(2,'0') +':'+
                            phut.toString().padStart(2,'0') +':'+
                            giay.toString().padStart(2,'0');
             $('#countdown').text(formatTime);

        },1000);
    });
});