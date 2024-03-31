// Mảng lưu trữ thông tin đánh giá của khách hàng
var reviews = [
    { name: "Yến Nhi", rating: 5, comment: "Sản phẩm này thực sự ấn tượng với hiệu suất pin mạnh mẽ, camera chất lượng cao và màn hình sắc nét. Pin trâu giúp tôi thoải mái sử dụng cả ngày mà không cần lo lắng về việc sạc lại. Camera chụp ảnh rõ nét và sống động, cùng với màn hình sáng đẹp, tạo ra một trải nghiệm sử dụng tuyệt vời. 😍" },
    { name: "Phạm Triết", rating: 5, comment: "Tôi rất hài lòng với sản phẩm này!😊 Áo có chất lượng vải tốt và form dáng vừa vặn. Màu sắc và kiểu dáng như trong hình ảnh trên website. Giao hàng cũng rất nhanh chóng. Tôi chắc chắn sẽ mua hàng từ cửa hàng này một lần nữa!" },
    { name: "Chí Phèo", rating: 3, comment:  "Sách rất thú vị và sâu sắc, tạo cảm xúc mạnh mẽ cho người đọc. Tuy nhiên, một số phần có thể được viết chi tiết hơn. 😐" },
    { name: "Tony Phùng", rating: 4, comment: "Tôi hài lòng về sản phẩm 😃😃😃 Sản phẩm đến tay tôi rất nhanh sau khi đặt hàng. Tôi rất ấn tượng với tốc độ giao hàng của cửa hàng này và sẽ tiếp tục ủng hộ họ trong tương lai. " },
  ];
  
  // Sử dụng hàm để lấy đánh giá dựa trên tên
  function getRatingByName(name) {
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].name.toLowerCase() === name.toLowerCase()) {
        return reviews[i];
      }
    }
    return null;
  }
  
  // Thêm mã vào sự kiện submit của form
  document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var resultDiv = document.getElementById('result');
    var review = getRatingByName(name);
    if (review !== null) {
      resultDiv.innerHTML = '<div class="review"><h3>Review của ' + review.name + '</h3><p><strong>Rating:</strong> ' + review.rating + ' stars</p><p><strong>Comment:</strong> ' + review.comment + '</p></div>';
      resultDiv.style.display = 'block';
    } else {
      resultDiv.innerHTML = 'Review not found.';
      resultDiv.style.display = 'block';
    }
  });
  