// // bai 8: đầu tiên tạo 1 cái select. có nhiều phần tử
// // 2. tạo 1 bảng. trong table có nhiều cột. stt, name, số lượng,đơn vị, đơn giá. thành tiền. action.
// // stt tự nhảy, name lấy ở trên.
// // số lượng input mặc định là 1, có thể thay đổi số lượng
// // đơn vị , đơn giá lấy ở select trên. 
// // thành tiền: đơn giá * thành tiền
// // action là một nút (button xóa ).
// // yc:
// // 1. chọn phần tử ở trên thì add record xuống dưới. 
// // 2. khi thay đổi số lượng thì tính lại thành tiền.
// // giải thích. bài hôm bữa đang làm là can thiệp vào đối tượng có sẵn trên html. ở bài này thì a k hề có trên html. thì k thể viết dc sự kiện k có trên html. số lượng là class.
// // 3. cách xử lý đổi tượng không xác định
// // 4. xử lý nút xóa. khi xóa thì thay đổi số thức tự của . thành số liền nhau.
// // // chỗ option thì phải định nghĩa thêm data- arrtribue 
// // vd: data-a = "avc"
// // cách lấy sẽ khác.


$(function(){
    function addRow() {
      let stt = $('#b8Table tbody').children().length + 1;
      let selectedOption = $('#b8Select option:selected');
      let name = $('#b8Select').val();
      let soluong = parseInt(selectedOption.data('soluong'));
      let donvi = selectedOption.data('donvi');
      let donGia = parseInt(selectedOption.data('gia'));
      let thanhtien = donGia * soluong;
      
      let cotStt = $('<td>' + stt + '</td>');
      let cotTen = $('<td>' + name + '</td>');
      let cotSL = $('<td><input class="sLnew" type="number" value="' + soluong + '"></input></td>');
      let cotGia = $('<td>' + donGia + '</td>');
      let cotDonVi = $('<td>' + donvi + '</td>');
      let cotTTien = $('<td>' + thanhtien + '</td>');
      let cotAction = $('<td> <button class="btn-xoa" >Xóa</button></td>');
  
      let newRow = $('<tr></tr>');
      newRow.append(cotStt);
      newRow.append(cotTen);
      newRow.append(cotSL);
      newRow.append(cotGia);
      newRow.append(cotDonVi);
      newRow.append(cotTTien);
      newRow.append(cotAction);
  
      $('#b8Table tbody').append(newRow);
    }
  
    function updateRowIndex() {
      $('#b8Table tbody tr').each(function(index) {
        $(this).find('td:eq(0)').text(index + 1);
      });
    }

    function updateHoaDon(){
        let tongtien=0;
        $('#b8Table tbody tr').each(function(index){
            let thanhtien = parseInt( $(this).find('td:eq(5)').text());
            tongtien += thanhtien;
            
        });
        $('#tongTien').text("Tổng tiền: "+tongtien);

        let checkVAT = $('#checkbVAT').prop('checked');
        let thue=0;
        if(checkVAT===true){
            thue= tongtien*0.1;
        }
        else{
             thue=0;
        }
           
        
        let giamGia = $('#inputGiamGia').val();
       
        let tongThanhTien = tongtien +thue ;
        if(giamGia>tongThanhTien){
            $('#inputGiamGia').val(0);
            alert('giảm giá không được lớn hơn tổng tiền');
            giamGia=0;
        }
        tongThanhTien -= giamGia;
        if(tongThanhTien<0){
            tongThanhTien=0;  
        }
        $('#TongTTien').text("Tổng thành tiền: "+tongThanhTien);

        
    }    
     
  
    $(document).on('change', '#b8Select', function() {
      addRow();
      updateHoaDon();
    });
  
    $(document).on('input paste', '.sLnew', function() {
      let soluong = parseInt($(this).val());
  
      if (soluong < 1) {
        soluong = 1;
        alert("Số lượng thấp nhất là: 1");
      }
     
  
      let donGia = $(this).parents('tr').find('td:eq(3)').text();
      let thanhtien = donGia * soluong;
      if(isNaN(thanhtien)){
        thanhtien=0;
      }
      $(this).parents('tr').find('td:eq(5)').text(thanhtien);
      updateHoaDon();
    });
  
    $(document).on('click', '.btn-xoa', function() {
      $(this).closest('tr').remove();
      updateRowIndex();
      updateHoaDon();
    });

    $('#checkbVAT').on('click',function(){
        updateHoaDon();
    });

    $('#inputGiamGia').on('input paste',function(){
        updateHoaDon();
    });
  });
