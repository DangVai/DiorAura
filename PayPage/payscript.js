document.addEventListener("DOMContentLoaded", function () {
    // Chọn các phần tử cho giá và số lượng
    const products = [
        {
            name: "LADY DIOR BAG",
            quantity: 2,
            price: 164.00
        },
        {
            name: "Super Potent Serum",
            quantity: 1,
            price: 66.00
        }
    ];

    // Hàm tính tổng chi phí
    function calculateTotal(products) {
        let total = 0;
        products.forEach(product => {
            total += product.quantity * product.price;
        });
        return total.toFixed(2);
    }

    // Hiển thị tổng chi phí lên HTML
    function displayTotal() {
        const totalPaymentElement = document.querySelector('.total-payment');
        const total = calculateTotal(products);
        totalPaymentElement.textContent = `$${total}`;
    }

    // Hiển thị tổng ban đầu
    displayTotal();
});


//PHẦN ICON THÔNG BÁO
function toggleNotification() {
    var notificationBox = document.getElementById("notificationBox");
    if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
        notificationBox.style.display = "block";
    } else {
        notificationBox.style.display = "none";
    }
}
function hideNotification() {
    var notificationContent = document.getElementById("ok");
    notificationContent.textContent = "Bạn đã đặt hàng thành công!";
    var notificationBox = document.getElementById("notificationBox");
    notificationBox.style.display = "none";
}
function Order(){
    alert("You have placed your order successfully")
}
