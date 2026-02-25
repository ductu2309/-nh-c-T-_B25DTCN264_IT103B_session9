let names = [
  "Iphone 15",
  "Laptop Dell",
  "Chuột Logitech",
  "Bàn phím cơ",
  "Tai nghe Sony",
];
let prices = [1200, 800, 50, 150, 450];
let stocks = [10, 5, 0, 15, 8];
while (true) {
  let choice = prompt`
  --- QUẢN LÝ KHO HÀNG ---
  1. Lọc sản phẩm cao cấp (> 500)
  2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
  3. Tính tổng vốn hóa kho hàng
  4. Giảm giá 10% toàn bộ sản phẩm
  5. Tìm kiếm sản phẩm theo từ khóa
  6. Báo cáo tình trạng tồn kho
  7. Thoát chương trình
Chọn chức năng (1-7):`;

  switch (choice) {
    case "1": {
      let premiumNames = names.filter((name, index) => prices[index] > 500);
      alert("Sản phẩm cao cấp: " + premiumNames.join(", "));
      break;
    }

    case "2": {
      let hasOutOfStock = stocks.some((s) => s === 0);
      let isAllAboveFloor = prices.every((p) => p > 100);

      alert(`========== KẾT QUẢ ============
- Có sản phẩm hết hàng: ${hasOutOfStock ? "Có" : "Không"}
- Toàn bộ giá > 100: ${isAllAboveFloor ? "Đúng" : "Sai"}`);
      break;
    }

    case "3": {
      let totalValue = prices.reduce((sum, price, index) => {
        return sum + price * stocks[index];
      }, 0);
      alert("Tổng giá trị tài sản trong kho: " + totalValue);
      break;
    }

    case "4": {
      prices = prices.map((p) => p * 0.9);
      alert("Đã cập nhật giảm giá 10% cho tất cả sản phẩm!");
      break;
    }

    case "5": {
      let keyword = prompt("Nhập từ khóa cần tìm:").toLowerCas();
      let results = "";

      names.forEach((name, index) => {
        if (name.toLowerCase().includes(keyword)) {
          results += `${name} - Giá: ${prices[index]} - Kho: ${stocks[index]}\n`;
        }
      });
      if (results === "") {
        alert("Không tìm thấy sản phẩm!");
      } else {
        alert(results);
      }

      break;
    }

    case "6": {
      let reports = names.map((name, index) => {
        let status = stocks[index] > 0 ? "Còn hàng" : "Hết hàng";
        return `${names[index]} - ${status} - (${stocks[index]})`;
      });
      alert(`KẾT QUẢ: 
${reports.join("\n")}`);
      break;
    }
    case "7": {
      if (choice === "7" || choice === null) {
        alert("Cảm ơn bạn đã sử dụng hệ thống!");
        break;
      }
    }

    default:
      alert("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 7!");
  }
}
