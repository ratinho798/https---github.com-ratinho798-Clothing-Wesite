let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".product").forEach(p => {
        p.style.display = p.dataset.name.includes(input) ? "block" : "none";
    });
}


const toggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("dark") === "on") document.body.classList.add("dark");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark") ? "on" : "off");
};
