// HÀM RENDER SẢN PHẨM
function renderProducts(cardList, elementId) {
    let div = cardList.map(p =>
        `<div class='course-item'>
            <img src='${p.image}' alt='${p.name}' onclick="window.location.href='../Detail_Product/Detail.html?id=${p.id}'"/>
            <h3>${p.name}</h3>
            <p>${p.content}</p>
            <h5 class="price">From: <span class="price-value">${p.price}</span></h5>
            <a href="../Detail_Product/Detail.html?id=${p.id}" class="more-info">></a>
        </div>`
    ).join("");
    document.getElementById(elementId).innerHTML = div;
}
// Danh sách sản phẩm 1
let cardList1 = [
    { id: 1, image: "./Image/sp1.jpg", name: "MISS DIOR", content: "Eau de parfum - floral and fresh notes ", price: "$125.00" },
    { id: 2, image: "./Image/sp2.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Eau de toilette", price: "$164.00" },
    { id: 3, image: "./Image/sp3.jpg", name: "MISS DIOR ABSOLUTELY BLOOMING", content: "Eau de parfum", price: "$125.00" }
];

// Danh sách sản phẩm 2
let cardList2 = [
    { id: 4, image: "./Image/sp4.jpg", name: "SAUVAGE", content: "Eau de Parfum", price: "$145.00" },
    { id: 5, image: "./Image/sp5.jpg", name: "SAUVAGE", content: "Elixir", price: "$230.00" },
    { id: 6, image: "./Image/sp6.jpg", name: "SAUVAGE", content: "Eau de toilette ", price: "$107.00" }
];

// Danh sách sản phẩm 3
let cardList3 = [
    { id: 7, image: "./Image/sp7.jpg", name: "ROUGE DIOR FOREVER LIPSTICK", content: "Transfer-proof lipstick pigmented matte-bare-lip feel comfort", price: "$66.00" },
    { id: 8, image: "./Image/sp8.jpg", name: "ROUGE DIOR FOREVER LIQUID", content: "Transfer-proof*liquid lipstick - ultra- pigmented matte- weightless", price: "$64.00" },
    { id: 9, image: "./Image/sp9.jpg", name: "DIOR FOREVER SKIN GLOW", content: "Clean Radiant Foundation - 24 Wear and Hydration", price: "$99.00" }
];

// Danh sách sản phẩm 4
let cardList4 = [
    { id: 10, image: "./Image/sp10.jpg", name: "DIOR PRESTIGE LE BAUME DE MINUIT", content: "Intensive Revitalizing Night Cream", price: "From $895.00" },
    { id: 11, image: "./Image/sp11.jpg", name: "DIOR PRESTIGE", content: "La Micro-Huile de Rose Advanced Serum", price: "From $238.00" },
    { id: 12, image: "./Image/sp12.jpg", name: "DIOR PRESTIGE LA CRÈME", content: "Anti-Aging Intensive Repairing Cream", price: "From $569.00" },
];

// Render sản phẩm
let cardList5 = [
    { id: 13, image: "./Image/sp13.jpg", name: "GRIS DIOR", content: "Unisex eau de parfum - chypre notes", price: "From $235.00" },
    { id: 14, image: "./Image/sp14.jpg", name: "DIORIVIER", content: "Eau de Parfum - Fig and Rose Notes", price: "From $235.00" },
    { id: 15, image: "./Image/sp15.jpg", name: "OUD ISPAHAN", content: "Oriental Fragrance", price: "From $235.00" },
];

// sản phẩm 6
let cardList6 = [
    { id: 16, image: "./Image/sp16.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Collector's Bottle", price: "From $1,240.00" },
    { id: 17, image: "./Image/sp17.jpg", name: "LES ADORABLES SET", content: "Shimmering Scurb, Body Cream and Shimmering Gel", price: "From $437.00" },
    { id: 18, image: "./Image/sp18.jpg", name: "MISS DIOR ROSE N'ROSES", content: "Eau de toilette", price: "From $156.00" },
]
//sản phẩm 7
let cardList7 = [
    { id: 19, image: "./Image/sp19.jpg", name: "COMPLIMENTARY SHIPPING", content: "For orders over $90.00", price: "From $1,500.00" },
    { id: 20, image: "./Image/sp20.jpg", name: "PERSONALISED GIFT CARD", content: "MESSAGE", price: "From $1,120.000" },
    { id: 21, image: "./Image/sp21.jpg", name: "RECEIVE 2 COMPLIMENTARY SAMPLES", content: "On all orders", price: "From $240.00" },
];


// Gọi hàm render với các danh sách khác nhau
renderProducts(cardList1, 'product-Discover');
renderProducts(cardList2, 'product-DiscoverOne');
renderProducts(cardList3, 'product-DiscoverTwo');
renderProducts(cardList4, 'product-DiscoverThree');
renderProducts(cardList5, 'product-DiscoverFour');
renderProducts(cardList6, 'product-DiscoverFive');
renderProducts(cardList7, 'product-DiscoverSix');


// PHẦN CHATBOX
const chats = {
    "chat1": {
        name: "Mai Tram",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "How much perfume you sell?", time: "10:35" },
            { sender: "me", text: "Hi!", time: "10:36" },
            { sender: "friend", text: "I want to know more details.", time: "10:37" }
        ],
        unread: 0
    },
    "chat2": {
        name: "Cong Doan",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Hello, excuse me!!!", time: "11:59" },
            { sender: "me", text: "Hello!", time: "12:00" },
            { sender: "friend", text: "Can you help me with something?", time: "12:01" },
            { sender: "friend", text: "I'm interested in your products.", time: "12:02" }
        ],
        unread: 2
    },
    "chat3": {
        name: "Mai Mai",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Surprised", time: "00:00" },
            { sender: "me", text: "Is everything okay?", time: "00:01" },
            { sender: "friend", text: "Yes, just wanted to say hi!", time: "00:02" },
            { sender: "friend", text: "Hope you're doing well.", time: "00:03" },
            { sender: "friend", text: "Talk later!", time: "00:04" }
        ],
        unread: 3
    },
    "chat4": {
        name: "Cute",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Hello", time: "00:00" },
            { sender: "me", text: "Are you okay?", time: "00:01" },
            { sender: "friend", text: "Yes, I'm fine", time: "00:02" },
            { sender: "friend", text: "Hehe", time: "00:03" },
            { sender: "friend", text: "Good luck", time: "00:04" }
        ],
        unread: 0
    },
    "chat5": {
        name: "Love",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Hi", time: "00:00" },
            { sender: "me", text: "What are you doing?", time: "00:01" },
            { sender: "friend", text: "oh,...", time: "00:02" },
            { sender: "friend", text: "About you?", time: "00:03" },
            { sender: "friend", text: "Play game", time: "00:04" }
        ],
        unread: 0
    }
    // Thêm các cuộc trò chuyện khác nếu cần
};


// PHẦN CHATBOX
// Lấy các phần tử HTML bằng ID
const chatBubble = document.getElementById('chatBubble');
const container_chat = document.getElementById('container_chat');
const closeChat = document.getElementById('closeChat');
const sendMessageBtn = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');
const chatHeaderName = document.getElementById('chatHeaderName');
const chatHeaderImage = document.getElementById('chatHeaderImage');
const chatList = document.getElementById('chatList');
let currentChatId = null;

// PHẦN CHATBOX
// Hàm lấy thời gian hiện tại ở định dạng HH:MM
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
}

//PHẦN CHATBOX
// Hàm hiển thị các tin nhắn trong chatBox
function displayMessages(chatId) {
    const chat = chats[chatId];
    if (!chat) return;

    chatHeaderName.innerHTML = `${chat.name} <br><span>online</span>`;
    chatHeaderImage.src = chat.image;


    chatBox.innerHTML = '';
    chat.messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (msg.sender === 'me') {
            messageElement.classList.add('my_message');
        } else {
            messageElement.classList.add('frnd_message');
        }

        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = `${msg.text}<br><span>${msg.time}</span>`;

        messageElement.appendChild(messageParagraph);
        chatBox.appendChild(messageElement);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}
//PHẦN CHATBOX
function handleChatBlockClick(event) {
    const block = event.currentTarget;
    const chatId = block.getAttribute('data-chat-id');

    if (currentChatId === chatId) return; 


    document.querySelectorAll('.chatlist .block').forEach(b => b.classList.remove('active'));


    block.classList.add('active');


    currentChatId = chatId;


    displayMessages(chatId);

    const unreadBadge = block.querySelector('b');
    if (unreadBadge) {
        chats[chatId].unread = 0;
        unreadBadge.remove();
    }
    const p = block.querySelector('.message_p p');
    const p1 = block.querySelector('.time');
    if (p) {
        p.style.fontWeight = 'normal';
        p.style.color = 'rgb(170, 170, 170)';
    }
    if (p1) {
        p1.style.fontWeight = 'normal';
        p1.style.color = 'rgb(17, 17, 17)';
    }
}
//PHẦN CHATBOX
document.querySelectorAll('.chatlist .block').forEach(block => {
    block.addEventListener('click', handleChatBlockClick);
});

// Xử lý chatbox
function handleChatbox() {
    if (userStatus) {
        container_chat.style.display = 'flex';
        chatBubble.style.display = 'none';
    } else {
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
        container_chat.style.display = 'none';
        chatBubble.style.display = 'flex';
    }
}
chatBubble.addEventListener('click', handleChatbox);



//PHẦN CHATBOX

const firstChatBlock = document.querySelector('.chatlist .block');
chatBubble.addEventListener('click', () => {
    container_chat.style.display = 'flex';
    chatBubble.style.display = 'none';
    if (firstChatBlock) {
        firstChatBlock.style.display = 'flex';
        firstChatBlock.click();
    }
});
closeChat.addEventListener('click', () => {
    container_chat.style.display = 'none';
    chatBubble.style.display = 'flex';
});

sendMessageBtn.addEventListener('click', () => {
    if (!currentChatId) {
        alert("Please select a chat first!");
        return;
    }

    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const currentTime = getCurrentTime();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'my_message');
        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = `${messageText}<br><span>${currentTime}</span>`;
        messageElement.appendChild(messageParagraph);
        chatBox.appendChild(messageElement);
        chats[currentChatId].messages.push({
            sender: 'me',
            text: messageText,
            time: currentTime
        });
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = '';
    }
});
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessageBtn.click();
    }
});

const searchInput = document.getElementById('search-input');
const chatBlocks = document.querySelectorAll('.block'); 

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.toLowerCase();
        chatBlocks.forEach(chatBlock => {
            chatBlock.style.display = 'flex'; 
        });
        let found = false;
        chatBlocks.forEach(chatBlock => {
            const title = chatBlock.querySelector('h4').textContent.toLowerCase(); 
            if (title.includes(searchTerm)) {
                found = true;
            } else {
                chatBlock.style.display = 'none'; 
            }
        });

        if (!found) {
            alert('Không tìm thấy chat nào phù hợp.');
        }
        searchInput.value = '';
    }
});
const attachIcon = document.getElementById('attachIcon');
const fileInput = document.getElementById('fileInput');
function sendImage(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const imageDataUrl = event.target.result;
        const currentTime = getCurrentTime();
        const message = {
            sender: 'me',
            type: 'image',
            content: imageDataUrl,
            time: currentTime
        };
        if (currentChatId) {
            chats[currentChatId].messages.push(message);
        }

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'my_message');

        const messageContent = document.createElement('p');
        if (message.type === 'image') {
            const img = document.createElement('img');
            img.src = message.content;
            img.alt = 'Sent Image';
            img.style.maxWidth = '200px';
            img.style.borderRadius = '10px';
            messageContent.appendChild(img);
        } else {
            messageContent.innerHTML = `${message.text}<br><span>${message.time}</span>`;
        }
        if (message.type !== 'image') {
            const timeSpan = document.createElement('span');
            timeSpan.textContent = message.time;
            messageContent.appendChild(timeSpan);
        }

        messageElement.appendChild(messageContent);
        chatBox.appendChild(messageElement);

        chatBox.scrollTop = chatBox.scrollHeight;
    };

    reader.readAsDataURL(file);
}
attachIcon.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        sendImage(file);
    } else {
        alert('Please select a valid image file.');
    }
    fileInput.value = '';
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

// PHẦN HOT SEARCH
 function search() {
    const query = document.getElementById('header-input').value; 
    const searchUrl = `search-result.html?q=${encodeURIComponent(query)}`; 
    window.location.href = searchUrl; 
}
function showOverlay() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('search').style.display = 'block'; 
}
function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('search').style.display = 'none'; 
}

const headerInput = document.getElementById('header-input');
headerInput.addEventListener('focus', showOverlay);
headerInput.addEventListener('click', showOverlay);

const overlay1 = document.getElementById('overlay');
overlay1.addEventListener('click', hideOverlay);

document.addEventListener('DOMContentLoaded', function() {
    hideOverlay();
});

// Tìm kiếm sản phẩm
const results = document.getElementById('results');
const products = JSON.parse(localStorage.getItem("cardList")) || [];
const inputSearch = document.getElementById('header-input');

document.addEventListener('click', function (event) {
    if (!results.contains(event.target) && event.target.id !== 'header-input') {
        results.style.display = 'none';
        document.getElementById('search').style.zIndex = "1001";
    }
});

inputSearch.addEventListener('keydown', function () {
    document.getElementById('search').style.zIndex = "999";
});

inputSearch.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    results.innerHTML = ''; // Xóa kết quả trước đó
    results.style.display = 'block';
    const filteredData = products.filter(item => item.name.toLowerCase().includes(query));

    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.addEventListener('click', function () {
            inputSearch.value = item.name; // Đặt giá trị ô input thành tên sản phẩm
            results.innerHTML = ''; // Xóa kết quả sau khi chọn
        });
        results.appendChild(li);
    });
});




// Hàm tìm kiếm sản phẩm
function searchProduct() {
    const dataInput = inputSearch.value;
    const result = products.find(item => item.name.toLowerCase() === dataInput.toLowerCase());

    if (!result) {
        alert("Not found");
        return;
    }

    const mainResult = products.filter(item => item.category === result.category);
    mainResult[0] = result;

    if (mainResult.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(mainResult));
        window.location.href = "../Search_Display/index.html";
    }
}
