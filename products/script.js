document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "Rs. 799", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "Rs. 999", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "Rs. 599", img: "../assets/iphone14.jpg", rating: "⭐⭐⭐⭐" },
    ];

    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = "";

    products.forEach(prod => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${prod.img}" alt="${prod.name}">
                <h5 class="product-name">${prod.name}</h5>
                <p class="product-price">${prod.price}</p>
                <div class="rating">${prod.rating}</div>
            </div>
        `;
    });
});