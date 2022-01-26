const PRODUCT = [
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


