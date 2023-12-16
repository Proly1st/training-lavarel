$(function(){
    $('#bai6-btn').on('click', function(){
        let arr1 = [6, 9, 1, 15, 22, 33, 2, 83, 67];
        let arr2 = [15, 2, 43, 18, 9, 12, 33];

        // Lấy ra các phần tử giống nhau
        let arrGiong = [];
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                arrGiong.push(arr1[i]);
                break;
                }
            }
        }
        // Lấy ra các phần tử khác nhau
        let arrKhac = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) === -1) {
                arrKhac.push(arr1[i]);
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {
                arrKhac.push(arr2[i]);
            }
        }
        //intersection.push(array1[i]); nghĩa là thêm phần tử ở mảng array1[i] và mảng intersection
        //array2.indexOf(array1[i]) === -1 ; kiểm tra xem phần tử array1[i] không tồn tại trong mảng array2. 
        $('#b6MangGiong').text("Mảng có các phần tử giống: "+arrGiong);
        $('#b6MangKhac').text("Mảng có các phần tử khác: "+arrKhac);

    })
});