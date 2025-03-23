document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "$599", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "$599", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "$599", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "$599", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "$599", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 12 Mini", price: "$599", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐" },
        { name: "iPhone 13", price: "$799", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
        { name: "iPhone 14 Pro", price: "$999", img: "assets/ip14.jpg", rating: "⭐⭐⭐⭐⭐" },
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
