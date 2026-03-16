let cart = JSON.parse(localStorage.getItem("cart")) || [];
let table = document.getElementById("cartTable");
let total = 0;

cart.forEach((item, index) => {
    let row = table.insertRow();
    row.insertCell(0).innerText = item.name;
    row.insertCell(1).innerText = "$" + item.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = () => {
        cart.splice(index,1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    };
    row.insertCell(2).appendChild(btn);
    total += item.price;
});

document.getElementById("total").innerText = "Total: $" + total;
