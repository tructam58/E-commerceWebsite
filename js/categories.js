const AMOUNT_ITEMS_DEFAULT_WILL_SHOW = 16;
const PRODUCTS = [
  {
    id: 1,
    cat: "Shoes, Women's",
    title: "Simple Adidas Sportwear",
    price: "$99.00 - $110.00",
    bestSeller: false,
    featured: true,
    review: 0,
    image: "images/shoe/1/1.jpg",
    images: ["images/shoe/1/1.jpg", "images/shoe/1/2.jpg", "images/shoe/1/3.jpg", "images/shoe/1/4.jpg"]


  },
  {
    id: 2,
    cat: "New Arrivals, Summer Season's",
    title: "Modern North Sportwear",
    price: "$99.00",
    bestSeller: false,
    featured: true,
    review: 1,
    image: "images/shoe/2/1.jpg",
    images: ["images/shoe/2/1.jpg", "images/shoe/2/2.jpg", "images/shoe/2/3.jpg", "images/shoe/2/4.jpg"]


  },
  {
    id: 3,
    cat: "For Women's",
    title: "Women’s Fashion Sneaker",
    price: "$120.00 - $130.00",
    bestSeller: true,
    review: 0,
    image: "images/shoe/3/1.jpg",
    images: ["images/shoe/3/1.jpg", "images/shoe/3/2.jpg", "images/shoe/3/3.jpg", "images/shoe/3/4.jpg"]


  },
  {
    id: 4,
    cat: "Men's, Shoes",
    title: "Men’s Fashion Sneaker",
    price: "$120.00 - $130.00",
    bestSeller: true,
    review: 1,
    image: "images/shoe/4/1.jpg",
    images: ["images/shoe/4/1.jpg", "images/shoe/4/2.jpg", "images/shoe/4/3.jpg", "images/shoe/4/4.jpg"]

  },
  {
    id: 5,
    cat: "Men's, Shoes",
    title: "Hige skinny weist dark blue shoes",
    price: "$190.00",
    bestSeller: true,
    review: 0,
    arrival: true,
    image: "images/shoe/5/1.jpg",
    images: ["images/shoe/5/1.jpg", "images/shoe/5/2.jpg", "images/shoe/5/3.jpg", "images/shoe/5/4.jpg"]

  },
  //balo
  {
    id: 6,
    cat: "For Women's, New Arrivals",
    title: "Daisy Fashion Sonia Bag",
    price: "$139.00 - $320.00",
    bestSeller: false,
    review: 0,

    image: "images/balo/1/1.jpg",
    images: ["images/balo/1/1.jpg", "images/balo/1/2.jpg", "images/balo/1/3.jpg", "images/balo/1/4.jpg"]

  },
  {
    id: 7,
    cat: "Men's, New Arrivals",
    title: "Men’s Fashion Bag",
    price: "$69.00 - $98.00",
    bestSeller: true,
    review: 0,
    image: "images/balo/2/1.jpg",
    images: ["images/balo/2/1.jpg", "images/balo/2/2.jpg", "images/balo/2/3.jpg", "images/balo/2/4.jpg"]

  },
  {
    id: 8,
    cat: "For Women's, New Arrivals",
    title: "Women’s Fashion Bag",
    price: "$69.00 - $80.00",
    bestSeller: true,
    review: 1,

    image: "images/balo/3/1.jpg",
    images: ["images/balo/3/1.jpg", "images/balo/3/2.jpg", "images/balo/3/3.jpg", "images/balo/3/4.jpg"]

  },



  //watch
  {
    id: 9,
    cat: "Men's, Watches",
    title: "Men’s Fashion Brown Watch",
    price: "$150.00",
    bestSeller: false,
    featured: true,
    review: 2,
    image: "images/watch/1/1.jpg",
    images: ["images/watch/1/1.jpg", "images/watch/1/2.jpg", "images/watch/1/3.jpg", "images/watch/1/4.jpg"]


  },
  {
    id: 10,
    cat: "Men's, New Arrivals, Watches",
    title: "Men’s Fashion Grey Watch",
    price: "$130.00",
    bestSeller: false,
    featured: true,
    review: 1,
    image: "images/watch/2/1.jpg",
    images: ["images/watch/2/1.jpg", "images/watch/2/2.jpg", "images/watch/2/3.jpg", "images/watch/2/4.jpg"]

  },
  {
    id: 11,
    cat: "Men's, Watches",
    title: "Men’s Hiking Watch",
    price: "$119.00",
    bestSeller: true,
    review: 0,
    arrival: true,
    image: "images/watch/3/1.jpg",
    images: ["images/watch/3/1.jpg", "images/watch/3/2.jpg", "images/watch/3/3.jpg", "images/watch/3/4.jpg"]

  },

  {
    id: 12,
    cat: "Men's, Watches",
    title: "Men’s Fashion Watch",
    price: "$190.00 - $210.00",
    bestSeller: true,
    review: 1,
    arrival: false,
    image: "images/watch/4/1.jpg",
    images: ["images/watch/4/1.jpg", "images/watch/4/2.jpg", "images/watch/4/3.jpg", "images/watch/4/4.jpg"]


  },
  {
    id: 13,
    cat: "New Arrivals, Watches, Women's",
    title: "Women’s Comfort Watch",
    price: "$119.00",
    bestSeller: true,
    review: 0,
    arrival: true,
    image: "images/watch/5/2.jpg",
    images: ["images/watch/5/2.jpg", "images/watch/5/3.jpg", "images/watch/5/4.jpg", "images/watch/5/5.jpg"]

  },
  {
    id: 14,
    cat: "New Arrivals, Watches",
    title: "Men’s Fashion E-Watch",
    price: "$119.00",
    bestSeller: false,
    review: 0,
    arrival: true,
    image: "images/watch/6/1.jpg",
    images: ["images/watch/6/1.jpg", "images/watch/6/2.jpg", "images/watch/6/3.jpg", "images/watch/6/4.jpg"]

  },
  //amplifier
  {
    id: 15,
    cat: "New Arrivals",
    title: "Modern Amplifier",
    price: "$199.00 - $210.00",
    bestSeller: false,
    review: 2,
    arrival: true,
    image: "images/amplifier/1/1.jpg",
    images: ["images/amplifier/1/1.jpg", "images/amplifier/1/2.jpg", "images/amplifier/1/3.jpg", "images/amplifier/1/4.jpg"]

  },

  {
    id: 16,
    cat: "New Arrivals, Watches",
    title: "Men’s Fashion E-Watch",
    price: "$119.00",
    bestSeller: false,
    review: 0,
    arrival: true,
    image: "images/watch/7/1.jpg",
    images: ["images/watch/7/1.jpg", "images/watch/7/2.jpg", "images/watch/7/3.jpg", "images/watch/7/4.jpg"]

  },
];





//processing range slider with 2 hands
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 30,
    max: 210,
    values: [30, 210],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
});



//menu-left hide show when click button dropdown
$(document).on("click", function (e) {
  if ($(e.target).hasClass("button-dropdown-content")) {
    const parentElNeedHide = e.target.closest(".hide");

    $(parentElNeedHide).find(".hide-content").slideToggle();
  }

});



//RENDER ALL PRODUCTS

function templateAppend(id, imagePath, cat, title, price, review) {
  return ` <div class="product-detail col-xs-3 col-md-3"  data-id=${id}>
            <div class="product-detail-inner">
            <a class="product-page" href="">
            <img src="${imagePath}" alt="">
            <div class="content">
              <h5 class="pro-cat">${cat}</h5>
              <h3 class="pro-title">${title}</h3>
              <span class="price">${price}</span>
              <div class="rate flex j-center"><a href="" class="flex j-between">
                <ul class="flex">
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </ul>
                <span>(${review} Review)</span>
              </a></div>
              <div class="select-option">
              <i class="fal fa-heart"></i>
                <a href="" class="btn">Select Options</a>
                <i class="fal fa-search"></i>
              </div>
            </div>
            </a>
            </div>
          </div> `
}

const render = PRODUCTS
  .map(item => {
    $(".pro-list").append(
      templateAppend(item.id, item.image, item.cat, item.title, item.price, item.review)
    );
  });













// type list and type large button
$(document).on("click", function (e) {
  e.preventDefault();
  const showtype = e.target;
  const parent = showtype.closest(".show-type");
  if (parent) {
    $(parent).find("i").removeClass("active");
    $(showtype).addClass("active");
    if ($(showtype).hasClass("show-type-thlist")) {
      // alert("list");
    }
    else {
      // alert("no list");
    }

  }
})


$("#sort-select").find(":selected").click(function (e) {
  e.preventDefault();
  alert($("#sort-select").find(":selected").val());

});



// BUTTON SHOW: AMOUNT ITEMS WHILL SHOW
function renderItemDefault(amountItem) {
  $(`.product-detail:gt(${amountItem})`).hide();

}
//renderItemDefault(AMOUNT_ITEMS_DEFAULT_WILL_SHOW);

function getValueItemWillShow() {
  return $("#show-item__select").val() ? $("#show-item__select").val() : AMOUNT_ITEMS_DEFAULT_WILL_SHOW;
}
$("#show-item__select").on("change", function () {
  const valueItemWillShow = getValueItemWillShow();
  var amountItemsWillShow = +valueItemWillShow - 1;
  // var amtItems = amountItemsWillShow;
  console.log(`product-detail:gt(${amountItemsWillShow})`);
  $(".product-detail").show();
  $(`.product-detail:gt(${amountItemsWillShow})`).hide();


});

// let amountItemsWillShow = getValueItemWillShow() != AMOUNT_ITEMS_DEFAULT_WILL_SHOW ? getValueItemWillShow() : AMOUNT_ITEMS_DEFAULT_WILL_SHOW;
$('#pagination-container').pagination({
  dataSource: PRODUCTS,
  pageSize: AMOUNT_ITEMS_DEFAULT_WILL_SHOW,
  showPrevious: true,
  showNext: true,


})

$(document).on("change", function (e) {
  e.preventDefault;

  $('#pagination-container').pagination({
    dataSource: PRODUCTS,
    pageSize: getValueItemWillShow(),
    showPrevious: true,
    showNext: true,


  })

});






/****CART***/
const item = localStorage.getItem("item");

const itemObject = JSON.parse(item);

let price = itemObject.price;

// let pricePro = price.split("-")[0].substr(1);

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






const goToProductPage = (selector) => {
  $(document).on("click", selector, function (e) {

    e.preventDefault();
    const id = $(this).closest(".product-detail").data("id");

    const item = PRODUCTS.find(val => val.id === id);

    //save to localStorage
    localStorage.setItem("item", JSON.stringify(item));

    window.location.href = "/product.html";
  });
}

goToProductPage(".product-page");
goToProductPage(".btn");



//thực hiện link đến trang home
$("#home").click(function () {
  window.location.href = "/index.html"
})


