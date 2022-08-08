// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array

function buy(id) {
  let chosenProduct = products.find((product) => product.id === id);
  cartList.push(chosenProduct);
  calculateTotal();
  console.log(cartList);
}

// Exercise 2
function cleanCart() {
  let newEmptyCartList = cartList.splice(0, cartList.lenght);
  cartList = newEmptyCartList;
  console.log(cartList);
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array

function calculateTotal() {
  let result = cartList.reduce((a, b) => a + b["price"], 0);
  console.log(result.toFixed(2));
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart() {
  cartList.forEach((product) => {
    product.quantity = 1;
  });

  let cart = cartList.reduce((acumulador, valorActual) => {
    if (acumulador.find((product) => product.id === valorActual.id)) {
      return acumulador.map((product) => {
        if (product.id === valorActual.id) {
          return {
            ...product,
            quantity: product.quantity + valorActual.quantity,
          };
        }
        return product;
      });
    }
    return [...acumulador, valorActual];
  }, []);

  console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
