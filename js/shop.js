var products = [
  {
    id: 1,
    name: "Cooking oil",
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
  let newEmptyCartList = newCart.splice(0, cartList.lenght);
  newCart = newEmptyCartList;
  console.log(newCart);

  let contentList = document.querySelector("tbody");
  contentList.remove();

  let totalPrice = document.getElementById("total_price");
  totalPrice.textContent = calculateTotal();
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array

function calculateTotal() {
  let result = newCart.reduce((a, b) => a + b["price"], 0);
  console.log(result.toFixed(2));
  return result;
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart() {
  newCart.forEach((product) => {
    product.quantity = 1;
    product.subtotal = product.price;
  });

  let cart = newCart.reduce((acumulador, valorActual) => {
    if (acumulador.find((product) => product.id === valorActual.id)) {
      return acumulador.map((product) => {
        if (product.id === valorActual.id) {
          return {
            ...product,
            quantity: product.quantity + valorActual.quantity,
            subtotal: (product.quantity + valorActual.quantity) * product.price,
          };
        }
        return product;
      });
    }
    return [...acumulador, valorActual];
  }, []);

  console.log(cart);

  cart = applyPromotionsCart(cart);
  return cart;
}

let cartWithDiscount = [];

// Exercise 5
function applyPromotionsCart(cart) {
  let cartWithDiscount = cart.map((product) => {
    if (product.id === 1 && product.quantity > 3) {
      return {
        ...product,
        subtotalWithDiscount: product.quantity * 10,
      };
    } else if (product.id === 3 && product.quantity >= 10) {
      return {
        ...product,
        subtotalWithDiscount: ((product.subtotal * 2) / 3).toFixed(2),
      };
    }
    return product;
  }, []);

  return cartWithDiscount;
}

// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
  let boughts = newCart;
  let listBody = document.querySelector("tbody");

  boughts.forEach((bought) => {
    let row = document.createElement("tr");

    let productName = document.createElement("th");
    productName.textContent = `${bought.name}`;
    productName.scope = "row";
    row.appendChild(productName);

    let productPrice = document.createElement("td");
    productPrice.textContent = `${bought.price}`;
    row.appendChild(productPrice);

    let productQuantity = document.createElement("td");
    productQuantity.textContent = `${bought.quantity}`;
    row.appendChild(productQuantity);

    let productTotal = document.createElement("td");
    productTotal.textContent = `${bought.subtotal}`;
    row.appendChild(productTotal);

    let totalPrice = document.getElementById("total_price");
    let result = newCart.reduce((a, b) => a + b.subtotal, 0);
    totalPrice.textContent = result;

    let removeButton = document.createElement("button");
    removeButton.innerText = `-`;
    row.appendChild(removeButton);

    listBody.appendChild(row);

    removeButton.addEventListener("click", () => {
      let id = bought.id;
      removeFromCart(id);

      let itemExists = newCart.find((item) => {
        if (item.id === id) {
          productQuantity.textContent = item.quantity;
          productTotal.textContent = item.subtotal.toFixed(2);
          return true;
        }
        return false;
      });

      if (!itemExists) {
        row.remove();
      }

      totalPrice.textContent = boughts
        .reduce((a, b) => a + b.subtotal, 0)
        .toFixed(2);
    });
  });
}

// ** Nivell II **

// Exercise 8
// Refactor previous code in order to simplify it
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array or update its quantity in case it has been added previously.
let newCart = [];

function addToCart(id) {
  let chosenProduct = products.find((product) => product.id === id);

  let itemExists = newCart.find((item) => {
    if (item.id === id) {
      item.quantity++;
      item.subtotal = item.subtotal + item.price;
      return true;
    }
    return false;
  });

  if (itemExists) {
    newCart.find((product) => {
      if (product.id === 1 && product.quantity > 3) {
        product.subtotalWithDiscount = product.quantity * 10;
        product.subtotal = product.subtotalWithDiscount;
      } else if (product.id === 3 && product.quantity >= 10) {
        product.subtotalWithDiscount = ((product.subtotal * 2) / 3).toFixed(2);
      }
    });
  }

  if (!itemExists) {
    newCart.push(chosenProduct);
    chosenProduct.quantity = 1;
    chosenProduct.subtotal = chosenProduct.price;
  }

  let productsAmount = document.getElementById("count_product");
  productsAmount.innerText++;

  console.log(newCart);
  return newCart;
} 

// Exercise 9
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array

function removeFromCart(id) {
  let itemToRemove = newCart.find((product) => product.id === id);
  let index = newCart.indexOf(itemToRemove);

  if (itemToRemove.quantity >= 1) {
    itemToRemove.quantity--;
    itemToRemove.subtotal = itemToRemove.subtotal - itemToRemove.price;
  }
  if (itemToRemove.quantity === 0) {
    newCart.splice(index, 1);
  }

  /* newCart = applyPromotionsCart(newCart); */

  let productsAmount = document.getElementById("count_product");
  productsAmount.innerText = newCart.length;

  console.log(newCart);
  return newCart;
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
