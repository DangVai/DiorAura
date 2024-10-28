const cardList = [
    {
        id: 1,
        name: 'MISS DIOR',
        content: 'Eau de parfum - floral and fresh notes',
        price: 125.00,
        description: 'Miss Dior Eau de Parfum reinvents itself with a new scent... [truncated for brevity]',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQERAPDw8QFRAQEBYREBAPDg8OFRUWGBcSFRYYHSggGBolGxYVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzIfICUwLS8tLS0tMy4rNSs3LS0tKy0tLS4tLS0tLS0tMC0rLS0tLS0tLS01LTUtLS0tLS0tLf/AABEIAPQAzgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAEMQAAIBAgMFBAYGBwcFAAAAAAABAgMRBBIhBTFBUYEiYXGRBhMyocHRQlJTsdLwI2KCkrPD8TNUcnODsuEUFjRDov/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAgEEAQQDAQAAAAAAAAABAhEDBBIhMVETIkFxgaHxMv/aAAwDAQACEQMRAD8A...',
        type: 'perfume',
        gender: 'Woman',
        category: 'Miss Dior'
    }
];

// Initialize localStorage with cardList if it doesn't exist
if (!localStorage.getItem("cardList")) {
    localStorage.setItem("cardList", JSON.stringify(cardList));
}

// Function to display the quantity of products
function showQuantity() {
    const quantities = JSON.parse(localStorage.getItem('cardList'));
    const qtyLength = quantities.length;
    document.getElementById('qty').innerHTML = 'Quantities: ' + qtyLength;
}
showQuantity();

// Function to add a product
function addProduct() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('content').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('comments').value;
    const category = document.getElementById('category').value;

    if (!name || !title || !price || !description || !category) {
        alert("Vui lòng điền tất cả các trường!");
        return;
    }

    // Handle image upload
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const image = e.target.result;
            // Add product after reading the image
            saveProduct(name, title, price, description, image, category);
        };
        reader.readAsDataURL(fileInput.files[0]);
        alert('Success');
        document.getElementById('productsModal').style.display = 'none';
    } else {
        alert("Vui lòng chọn một hình ảnh!");
    }
}

// Function to save product information
function saveProduct(name, title, price, description, image, category) {
    const cardList = JSON.parse(localStorage.getItem("cardList"));
    const newProduct = {
        id: cardList.length + 1,
        name: name,
        title: title,
        price: parseFloat(price),
        description: description,
        image: image,
        type: document.querySelector('input[name="product"]:checked').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        // Include other properties as necessary
    };

    cardList.push(newProduct);
    localStorage.setItem("cardList", JSON.stringify(cardList));
    showQuantity(); // Update displayed quantity after adding the product
}

// function thêm sản phẩm
function addProduct() {
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var price = document.getElementById('price').value;
    var description = document.getElementById('comments').value;
    var category = document.getElementById('category').value;

    if (!name || !title || !price || !description || !category) {
        alert("Vui lòng điền tất cả các trường!");
        return;
    }

    // Xử lý hình ảnh
    var fileInput = document.getElementById('file-input');
    var image;
    if (fileInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            image = e.target.result;
            // Thêm sản phẩm sau khi đọc xong hình ảnh
            saveProduct(name, title, price, description, image, category);
            
        };
        reader.readAsDataURL(fileInput.files[0]);
        alert('Success')
        document.getElementById('productsModal').style.display = 'none';
    } else {
        alert("Vui lòng chọn một hình ảnh!");
    }
}
// lưu thông tin
function saveProduct(name, title, price, description, image, category) {
    var cardList = JSON.parse(localStorage.getItem("cardList"));
    var newProduct = {
        id: cardList.length + 1,
        name: name,
        title: title,
        price: parseFloat(price),
        description: description,
        image: image,
        type: document.querySelector('input[name="product"]:checked').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        capacity: document.querySelector('input[name="capacity"]:checked').value,
        color: document.querySelector('input[name="color"]:checked').value,
        category: category
    };
    cardList.push(newProduct);
    localStorage.setItem("cardList", JSON.stringify(cardList));
    
    location.reload()
    
    
}
var productss = JSON.parse(localStorage.getItem("cardList"));
console.log("Store: ",productss)
// Mở thêm sanr phẩm
function openAddProduct() {
    document.getElementById('productsModal').style.display = 'block';
}
// Dong them san pham
function closeAddproduct(){
    document.getElementById('productsModal').style.display = 'none';
}
// Hiển thị sản phẩm
function showProducts() {
    var cardList = JSON.parse(localStorage.getItem("cardList"));

    if (cardList && cardList.length > 0) {
        var tableContent = '';  

        for (var i of cardList) {
            var row = "<tr  style = 'border-bottom: 1px solid black; background-color: #faeef0;'>";
            row += "<td style='padding-left: 90px;font-family: 'Kaisei Tokumin';'>" + i.id + "</td>";
            row += "<td style='padding-left: 50px;font-family: 'Kaisei Tokumin';'>" + i.name + "</td>";
            row += "<td style='padding-left: 60px;font-family: 'Kaisei Tokumin';'><img src='" + i.image + "' alt='Product Image' width='100' height='100;'></td>";
            row += "<td style='padding-left: 90px;'> $" + i.price + "</td>";
            row += "<td style='padding-left: 70px; font-family: Kaisei Tokumin; '>" +
            "<button id = 'btn-edit' class='btn btn-success' onclick='updateData(\"" + i.id + "\")'>Edit</button> " +
            "<button style='font-family: Kaisei Tokumin;' id = 'btn-delete' class='btn btn-danger' onclick='openFormRemove(\"" + i.id + "\")'>Delete</button></td>";
            row += "</tr>";
            tableContent += row; 
        }
        document.getElementById('content_table').innerHTML = tableContent;
    } else {
        console.log("No products found in localStorage.");
    }
}
showProducts();
// hamf mo form xoa SP
var id_item;
function openFormRemove(id){
    document.getElementById('formRemove').style.display = 'block';
    id_item = id;
}
function closeFormRemove(){
    document.getElementById('formRemove').style.display = 'none';
}
// Hàm mở form xac nhạn update
function openFormUpdate(){
    document.getElementById('formUpdate').style.display = 'block';
    id_item = id;
}
function closeFormUpdate(){
    document.getElementById('formUpdate').style.display = 'none';
    document.getElementById('update_pro').style.display = 'none';
    
    
}


// Hàm xóa sản phẩm
function removeData(){
    var cardList = JSON.parse(localStorage.getItem("cardList"));
    
    const newProducts = cardList.filter(function(product){
        return String(product.id) !== String(id_item);
    });
    localStorage.setItem("cardList", JSON.stringify(newProducts));
    console.log(cardList)
    location.reload()
    
}

// Hiển thị dử liệu cần up date
var idUpdate;
function updateData(id) {
    idUpdate = id;
    document.getElementById('update_pro').style.display = 'block';
    var cardList = JSON.parse(localStorage.getItem("cardList"));
    if (!products) {
        console.error("No products found in localStorage.");
        return;
    }
    var product = cardList.find(function(product) {
        return String(product.id) === String(id);
    });
    if (!product) {
        console.error("Product not found with id:", id);
        return;
    }
    document.getElementById("name_update").value = product.name || '';							
    document.getElementById("title_update").value = product.title || '';							
    document.getElementById("price_update").value = product.price || '';	
    document.getElementById("comments_update").value = product.description || '';	
    document.getElementById("image").value = product.image || '';	

    const radioButton = document.querySelector(`input[name="product_update"][value="${product.type}"]`);
    if (radioButton) {
        radioButton.checked = true;
    }
    const genderRadioButton = document.querySelector(`input[name="gender_update"][value="${product.gender}"]`);
    if (genderRadioButton) {
        genderRadioButton.checked = true;
    }
    console.log("capa: ", product.capacity)
    console.log("color: ", product.color)
    const capacityUpdate = document.querySelector(`input[name="capacity"][value="${product.capacity}"]`);
    if (capacityUpdate) {
        capacityUpdate.checked = true;
    }
    
    const colorUpdate = document.querySelector(`input[name="color"][value="${product.color}"]`);
    if (colorUpdate) {
        colorUpdate.checked = true;
    }
    document.getElementById("category_update").value = product.category || '';
  
}
// hàm thực hiện update, xóa sản phẩm cũ
function createUpdate(){
    var cardList = JSON.parse(localStorage.getItem("cardList"));
    const updateProduct = {
        id: idUpdate,
        name: document.getElementById("name_update").value,
        title: document.getElementById("title_update").value,
        price: parseFloat(document.getElementById("price_update").value),
        description: document.getElementById("comments_update").value,
        image:document.getElementById('image').value,
        type: document.querySelector('input[name="product_update"]:checked').value,
        gender: document.querySelector('input[name="gender_update"]:checked').value,
        capacity: document.querySelector('input[name="capacity"]:checked').value,
        color: document.querySelector('input[name="color"]:checked').value,
        category: document.getElementById("category_update").value
    }
    var replace = cardList.filter(function(re_product){
        return String(re_product.id) !== String(idUpdate);
    })
    replace.push(updateProduct);
    localStorage.setItem("cardList", JSON.stringify(replace));
    
    location.reload();
    document.getElementById('update_pro').style.display = 'none';
    console.log("Product updated:", updatedProducts);
    
    
}

// var productss = JSON.parse(localStorage.getItem("products"));
// console.log("Store: ", productss)
function openUser(){
    window.location.href = '../User_managerment/adminUser.html';
}
function openConfirmation(){
    window.location.href = '../Order_Confirm/order_1.html';
}
function openChart(){
    window.location.href = '../Chart/chart.html';
}
// Phan tim kiem
var product = JSON.parse(localStorage.getItem("cardList"));
const searchInput = document.getElementById('header-input');
const results = document.getElementById('results');
        // Thêm sự kiện click cho toàn bộ document
document.addEventListener('click', function(event) {
        // Kiểm tra nếu click không nằm trong ul và ô input
    if (!results.contains(event.target) && event.target.id !== 'header-input') {
        results.style.display = 'none';
    }
});
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    results.innerHTML = ''; // Xóa kết quả trước đó
    results.style.display = 'block';
    const filteredData = product.filter(item => item.name.toLowerCase().includes(query));
    console.log(filteredData)
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.addEventListener('click', function() {
            searchInput.value = item.name; // Đặt giá trị ô input thành tên sản phẩm
            results.innerHTML = ''; // Xóa kết quả sau khi chọn
        });
        results.appendChild(li);
    });
});
function searchProduct(){
    var dataInput  = document.getElementById('header-input').value;
    var result = product.filter(function(item){
        return item.name == dataInput;
    });
    
    if(!result){
        alert("Not found");
    }else{
        showFind(result);
    }
}
function showFind(arr) {
    if (arr && arr.length > 0) {
        var tableContent = '';  

        for (var i of arr) {
            var row = "<tr  style = 'border-bottom: 1px solid black; background-color: #faeef0;'>";
            row += "<td style='padding-left: 90px;font-family: 'Kaisei Tokumin';'>" + i.id + "</td>";
            row += "<td style='padding-left: 50px;font-family: 'Kaisei Tokumin';'>" + i.name + "</td>";
            row += "<td style='padding-left: 60px;font-family: 'Kaisei Tokumin';'><img src='" + i.image + "' alt='Product Image' width='100' height='100;'></td>";
            row += "<td style='padding-left: 90px;'> $" + i.price + "</td>";
            row += "<td style='padding-left: 70px; font-family: Kaisei Tokumin; '>" +
            "<button id = 'btn-edit' class='btn btn-success' onclick='updateData(\"" + i.id + "\")'>Edit</button> " +
            "<button style='font-family: Kaisei Tokumin;' id = 'btn-delete' class='btn btn-danger' onclick='openFormRemove(\"" + i.id + "\")'>Delete</button></td>";
            row += "</tr>";
            tableContent += row; 
        }
        document.getElementById('content_table').innerHTML = tableContent;
    } else {
        console.log("No products found in localStorage.");
    }
}
