let a = [];
const list_pro_cart = localStorage.getItem("list-cart");
const list = JSON.parse(list_pro_cart);
a.push(list);
document.write(list)
console.log(a)
