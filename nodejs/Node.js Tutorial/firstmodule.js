/**
Đoạn code Node.js trên định nghĩa một hàm myDateTime() và xuất ra ngoài thông qua exports.

Cụ thể:

exports.myDateTime: Định nghĩa hàm myDateTime() và xuất ra ngoài thông qua exports để các file khác có thể nhập và sử dụng
Hàm myDateTime() không nhận tham số
Trong hàm, gọi Date() để lấy ngày giờ hiện tại và trả về
Như vậy, hàm này đơn giản trả về chuỗi ngày giờ hiện tại khi được gọi.
*/

exports.myDateTime = function() {
    return Date();
};