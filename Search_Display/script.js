// Mảng để lưu trữ thông tin sản phẩm đã mua
let purchasedProducts = [];

// Tạo cái cardList nếu chưa có
if (!localStorage.getItem("cardList")) {
    localStorage.setItem("cardList", JSON.stringify(cardList))
}

// Hàm hiển thị hoặc ẩn thông báo
function toggleNotification() {
    var notificationBox = document.getElementById("notificationBox");
    if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
        notificationBox.style.display = "block"; // Hiển thị thông báo
    } else {
        notificationBox.style.display = "none"; // Ẩn thông báo
    }
}

function addToCart(productName, productPrice) {
    purchasedProducts.push({ name: productName, price: productPrice });
    updateNotificationContent();
}

// Hàm cập nhật nội dung thông báo
function updateNotificationContent() {
    var notificationContent = document.getElementById("success-alert");

    if (purchasedProducts.length > 0) {
        // Tạo danh sách sản phẩm đã mua
        let productsList = purchasedProducts.map(product => `${product.name} ($${product.price})`).join('<br><br>');
        // Cập nhật nội dung thông báo
        notificationContent.innerHTML = `
            <div class="alert alert-success">
                <button type="button" class="close" onclick="closeAlert(this)">x</button>
                <strong>Success!</strong> The following product(s) have been added to your wishlist:<br>
                ${productsList}
            </div>`;
        // Hiển thị thông báo
        notificationContent.style.display = "block";
        setTimeout(function () {
            notificationContent.style.display = "none";
        }, 3000);
        purchasedProducts = [];
    }
}


// Hàm đóng thông báo khi nhấn nút "x"
function closeAlert(element) {
    let alertElement = element.parentElement;
    alertElement.classList.add("fade-out");
    setTimeout(function () {
        alertElement.style.display = "none"; // Ẩn phần tử sau khi hoàn thành hiệu ứng
    }, 600);
}



// JS cho phần lọc sản phẩm
function showOptions() {
    var options = document.getElementById('options');
    options.style.display = (options.style.display === 'block') ? 'none' : 'block';
}

// Hiển thị các tùy chọn sản phẩm theo từng danh mục
function showOptions1() { toggleProducts('product1'); }
function showOptions2() { toggleProducts('product2'); }
function showOptions3() { toggleProducts('product3'); }
function showOptions4() { toggleProducts('product4'); }
function showOptions5() { toggleProducts('product5'); }
function showOptions6() { toggleProducts('product6'); }
function showOptions7() { toggleProducts('product7'); }
function showOptions8() { toggleProducts('product8'); }

function toggleProducts(productId) {
    const product = document.getElementById(productId);
    product.style.display = (product.style.display === 'block') ? 'none' : 'block';
}



// Lấy phần tử thanh trượt và phần tử để hiển thị giá trị
const priceSlider = document.getElementById('priceRange');
const selectedPrice = document.getElementById('selectedPrice');

// Khai báo biến để lưu giá trị giá hiện tại
let currentPrice = priceSlider.value;

// Hàm để cập nhật giá trị hiển thị và biến khi người dùng thay đổi thanh trượt
priceSlider.addEventListener('input', function () {

    selectedPrice.textContent = priceSlider.value;
    currentPrice = priceSlider.value;

    // Gọi hàm chọn lại để lọc sản phẩm mỗi khi thay đổi giá
    chose();
});


let dataJson = JSON.parse(localStorage.getItem("cardList")) || [];
console.log("MT",dataJson);
console.log("MT",dataJson[1].content);

function renderProducts(listchose = [], listchose2 = [], listchose3 = [], listchose4 = []) {
    let div = '';

    for (let i = 0; i < dataJson.length; i++) {
        let product = dataJson[i];
        let listproduct = product.category;
        let listproduct2 = product.type;
        let listproduct3 = product.Capacity; // Giá trị dung tích của sản phẩm
        let listproduct4 = product.color;

        if (listchose.length > 0 && !listchose.includes(listproduct)) continue;
        if (listchose2.length > 0 && !listchose2.includes(listproduct2)) continue;
        if (listchose3.length > 0 && !listchose3.includes(listproduct3)) continue;
        if (listchose4.length > 0 && !listchose4.includes(listproduct4)) continue;

        // So sánh giá sản phẩm với giá trị thanh trượt
        if (product.price > currentPrice) continue;

        div += `
        <div class='course-item'>
            <img src='${product.image}' alt='${product.name}'/>
            <h3>${product.name}</h3>
            <p>${product.content}</p>
            <h5 class="price">From $:<span class="price-value">${product.price}</span></h5>
            <div class="button-container">
                <button onclick="addToCart('${product.name}', '${product.price}')">
                    <i class="fas fa-shopping-cart"></i> Buy
                </button>
                <button onclick="viewCart()">
                    <i class="fas fa-shopping-cart"></i>(<span id="cart-count">0</span>)
                </button>
                <button onclick="viewDetails('${product.name}')">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        </div>
        `;
    }

    document.getElementById('product-Discover').innerHTML = div;
}

function chose() {
    // Lấy các lựa chọn từ phần Category (sản phẩm)
    let arr1 = document.querySelectorAll('#options input[type="checkbox"]');
    let listchose = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) listchose.push(arr1[i].value);
    }

    // Lấy các lựa chọn từ phần Version
    let arr2 = document.querySelectorAll('.item .version');
    let listchose2 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].checked) listchose2.push(arr2[i].value);
    }

    // Lấy các lựa chọn từ phần Capacity
    let arr3 = document.querySelectorAll('.capacity-options input[type="checkbox"]');
    let listchose3 = [];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i].checked) {
            listchose3.push(arr3[i].value);
        }
    }

    // Lấy các lựa chọn từ phần Color
    let arr4 = document.querySelectorAll('.color-options input[type="checkbox"]');
    let listchose4 = [];
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i].checked) {
            listchose4.push(arr4[i].value);
        }
    }

    // Gọi hàm renderProducts với các danh sách đã chọn
    renderProducts(listchose, listchose2, listchose3, listchose4);
}

// Gọi hàm render lần đầu tiên để hiển thị tất cả sản phẩm
// renderProducts();

document.querySelectorAll('.capacity-options input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', chose);
});

document.querySelectorAll('.color-options input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', chose);
});



// Hiển thị nút Back to Top khi cuộn xuống
window.addEventListener('scroll', function () {
    const backTopButton = document.querySelector('.back-top');
    if (window.scrollY > 400) {
        backTopButton.classList.add('active');
    } else {
        backTopButton.classList.remove('active');
    }
});

// Xử lý khi click vào nút Back to Top
document.querySelector('.back-top a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});

// Lấy data được luưu bên file homepage để hiển thị
const resultsSearch = JSON.parse(localStorage.getItem('searchResults'));
function displayResults(){
    let div = '';
    resultsSearch.forEach(function(item){
        div += `
        <div class='course-item'>
            <img src='${item.image}' alt='${item.name}'/>
            <h3>${item.name}</h3>
            <p>${item.content}</p>
            <h5 class="price">From $:<span class="price-value">${item.price}</span></h5>
           <a class="more-info">></a>
        </div>
        `;
    });
    document.getElementById('product-Discover').innerHTML = div;
};
// show kết quả
displayResults();

