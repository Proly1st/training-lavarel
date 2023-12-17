// bai 8: đầu tiên tạo 1 cái select. có nhiều phần tử
// 2. tạo 1 bảng. trong table có nhiều cột. stt, name, số lượng,đơn vị, đơn giá. thành tiền. action.
// stt tự nhảy, name lấy ở trên.
// số lượng input mặc định là 1, có thể thay đổi số lượng
// đơn vị , đơn giá lấy ở select trên. 
// thành tiền: đơn giá * thành tiền
// action là một nút (button xóa ).
// yc:
// 1. chọn phần tử ở trên thì add record xuống dưới. 
// 2. khi thay đổi số lượng thì tính lại thành tiền.
// giải thích. bài hôm bữa đang làm là can thiệp vào đối tượng có sẵn trên html. ở bài này thì a k hề có trên html. thì k thể viết dc sự kiện k có trên html. số lượng là class.
// 3. cách xử lý đổi tượng không xác định
// 4. xử lý nút xóa. khi xóa thì thay đổi số thức tự của . thành số liền nhau.
// // chỗ option thì phải định nghĩa thêm data- arrtribue 
// vd: data-a = "avc"
// cách lấy sẽ khác.

$(function(){
    // dòng dưới là lấy ra mấy giá trị mà jquery nó thêm vào nên ghi là document, ở giữa thêm id của bảng.
    $(document).on('change','#b8Select',function(){
        let stt = $('#b8Table tbody').children().length+1;
       //Cụ thể, $('#b8Table tbody') sẽ chọn phần tử <tbody> trong bảng có ID là b8Table. Với tiếp theo, .children() sẽ trả về tất cả các phần tử con (children) của phần tử <tbody>. Cuối cùng, .length sẽ trả về số lượng các phần tử con đó. 
        
        let selectedOption = $(this).find('option:selected');
        // selectedOption lấy ra cái option đã chọn
        let name = $('#b8Select').val();
        let soluong = parseInt(selectedOption.data('soluong')) ;
        // lấy cái data có Attribute là trong dấu '' 
        let donvi = selectedOption.data('donvi') ;
        let donGia = parseInt (selectedOption.data('gia'));
        let thanhtien = donGia;

       
        //tạo một cột (<td>) mới trong hàng với nội dung là giá trị của biến stt và gán cho biến cotStt.
        let cotStt =  $('<td>' + stt +'</td>');
        let cotTen = $('<td>' + name +'</td>');
        let cotSL = $('<td><input class="sLnew" type="number" value="' + soluong + '"></input></td>');
        let cotGia = $('<td>' + donGia +'</td>');
        let cotDonVi = $('<td>' + donvi +'</td>');
        let cotTTien = $('<td>' + thanhtien +'</td>');
        let cotAction = $('<td> <button class="btn-xoa" >Xóa</button></td>');
        
        let newRow = $('<tr></tr>');
        // tạo ra 1 dòng mới r thêm cột đã tạo vào trong.
        newRow.append(cotStt);
        newRow.append(cotTen);
        newRow.append(cotSL);
        newRow.append(cotGia);
        newRow.append(cotDonVi);
        newRow.append(cotTTien);
        newRow.append(cotAction);
        // thêm hàng mới vào phần thân bảng
        $('#b8Table tbody').append(newRow);
    });
});

$(function(){
    $(document).on('input paste','.sLnew',function(){
        soluong = $(this).val();
        donGia = $(this).parents('tr').find('td:eq(3)').text();
        
        thanhtien = donGia  * soluong ;
        $(this).parents('tr').find('td:eq(5)').text(thanhtien);
       //parents('tr') tìm hàng tr chứa phần tử hiện tại. find('td:eq(5)') thì tìm kiếm ô số 5 trong hàng <tr> .
    });
});

$(function(){
    $(document).on('click','.btn-xoa',function(){
        
        $(this).closest('tr').remove();
        
        $('#b8Table tbody tr').each(function(index) {
            $(this).find('td:eq(0)').text(index + 1);
          });
//.each() để lặp qua các hàng trong <tbody> của bảng. mỗi lần lặp là nó tìm phần tử td cột 1 rồi cập nhật lại. nãy làm không ra là do ở trên có 'tr ' rồi nhưng mà ở dưới vẫn sài parents nên nó k ra.
    });
});