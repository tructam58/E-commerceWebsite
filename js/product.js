const item = localStorage.getItem("item");

const itemObject = JSON.parse(item);

let price = itemObject.price;

let pricePro = price.split("-")[0].substr(1);

let list_products = [];
let list_cart_product = [];


list_products = localStorage.getItem("lstproducts") ? JSON.parse(localStorage.getItem("lstproducts")) : [];
list_cart_product.push(list_products)
//làm phẳng array list_cart_product
list_cart_product = list_cart_product.flat();
function saveItemToCart(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function updateAmountIncart(amountProductIncart) {
  $(".btn-cart .amount").text(amountProductIncart);
}
updateAmountIncart(list_cart_product.length);

const renderItem = (item) => {
  $(".pro-cat").text(item.cat);
  $(".pro-title").text(item.title);
  $(".pro-price").text(item.price);

  $(".pro-img").attr("src", item.images[0]);
  $(".pro-img2").attr("src", item.images[1]);
  $(".pro-img3").attr("src", item.images[2]);
  $(".pro-img4").attr("src", item.images[3]);

}


const renderImgProduct = (item) => {
  $(".owl-dot:nth-child(1)").html(`<img src="${item.images[0]}">`);
  $(".owl-dot:nth-child(2)").html(`<img src="${item.images[1]}">`);
  $(".owl-dot:nth-child(3)").html(`<img src="${item.images[2]}">`);
  $(".owl-dot:nth-child(4)").html(`<img src="${item.images[3]}">`);


}
renderItem(itemObject);








//nav-tab
$(".nav-tab").click(function (e) {
  e.preventDefault();

  const id = $(this).attr('href');
  $(".nav-tab, .tab").removeClass("active");
  $(this).addClass("active");
  $(id).addClass("active");
})



$(document).ready(function () {

  $(".main-img").owlCarousel({
    items: 1,
    dots: true,
    dotsEach: 1,
    nav: true,
    loop: true,
    navText: [`<i class="fal fa-angle-left"></i>`,
      `<i class="fal fa-angle-right"></i>`],

  }
  );

  renderImgProduct(itemObject);

});



$(document).click(function (e) {
  if (e.target.closest(".close")) {
    $(".modal-content").fadeOut();
  }
});



$(".play-btn").click(function (e) {
  // e.preventDefault();
  $(".modal-content").fadeIn();
});



$(".color").click(function (e) {
  e.preventDefault();
  $(".color-group .color").removeClass("active");
  $(this).addClass("active");

})
$(".size").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");

  }
  else {
    $(".size-group").find(".size").removeClass("active");
    $(this).addClass("active");

  }
  if ($(".size").hasClass("active")) {
    $(".pro-price").text("$" + pricePro)
    $(".add-to-cart").removeClass("not-allow")
  }
  else {
    $(".pro-price").text(price)
    $(".add-to-cart").addClass("not-allow")
  }
})



//tăng giảm sl sản phẩm giỏ hàng
$("#increase").click(function (e) {
  e.preventDefault();
  stepper($(this));
});
$("#decrease").click(function (e) {
  e.preventDefault();
  stepper($(this));
});
function stepper(btn) {
  let min = $(".input-qty").attr("min");
  let max = $(".input-qty").attr("max");
  let val = $(".input-qty").attr("value");
  let id = btn.attr("id");
  let step = (id === "increase") ? -1 : 1;
  let newValue = +val + step;

  if (newValue >= min && newValue <= max) {
    $(".input-qty").attr("value", newValue);
  }
}




function resetCart() {
  $(".list-pro-cart").empty();
}
function showNoItemInCart() {
  return $('.list-pro-cart').html(`<h3>NO PRODUCTS IN THE CART.</h3>`)
}
const renderCart = () => {
  if (!list_cart_product.length) {
    showNoItemInCart();
    return;
  }
  else {
    resetCart();

    list_cart_product.map(item => {
      $('.list-pro-cart').append(
        `<div class="item-cart flex a-center" data-id=${item.id}>
          <img src="${item.images[0]}" alt="">
          <div class="info-pro">
            <a href="" class="name-pro">${item.title}</a>
            <span class="amount">${item.quantity} x</span> <span class="price">$${item.pricePro}</span>

          </div>
          <i class="delete far fa-minus-circle"></i>
        </div>`
      );
    });
  }
}
//tính giá tiền subtotal
const renderSubtotal = list_cart_product => {
  const total = list_cart_product.reduce((acc, val) => acc + val.quantity * val.pricePro, 0);
  $(".total").text("$" + total)
}
renderSubtotal(list_cart_product);

//hiện giỏ hàng
$(".btn-cart").click(function (e) {
  e.preventDefault();
  $(".shopping").fadeIn();
  $(".shopping-cart").css({ "right": "0" })
  renderCart();
});

//ẩn khung cart
$(document).on("click", function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.closest(".shopping") && !target.closest(".shopping-cart")) {
    $(".shopping").fadeOut();
  }
});



/****xóa Item ra khỏi cart (DELETE ITEMS IN CART)****/
$(document).on("click", ".delete", function (e) {
  const id = $(this).closest(".item-cart").data("id");
  const idx = list_cart_product.findIndex(val => val.id === id);
  list_cart_product.splice(idx, 1);
  renderCart();
  renderSubtotal(list_cart_product);
  updateAmountIncart(list_cart_product.length)
  saveItemToCart("lstproducts", list_cart_product);
});



/****thêm sản phẩm vào giỏ hàng (ADD TO CART)****/
$(".add-to-cart").click(function (e) {
  e.preventDefault();
  if (!$(this).hasClass("not-allow")) {
    const amount = $(".input-qty").attr("value");
    const existInCart = list_cart_product.findIndex(val => val.id == itemObject.id)

    if (existInCart === -1) {
      itemObject.quantity = amount;
      itemObject.pricePro = pricePro;
      list_cart_product.push(itemObject);
    }
    else {
      list_cart_product[existInCart].quantity = +list_cart_product[existInCart].quantity + +amount;
    }
    renderSubtotal(list_cart_product);
    updateAmountIncart(list_cart_product.length)
    saveItemToCart("lstproducts", list_cart_product);


  }
})







//thực hiện link đến trang home
$("#home").click(function () {
  window.location.href = "/index.html";
})

$("#categories").click(function () {
  window.location.href = "/categories.html";
})