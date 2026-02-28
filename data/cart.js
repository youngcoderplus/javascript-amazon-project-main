export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId: '1'
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptionId: '2'
}];
};

};
 

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Adds a product to the cart
export function addToCart(productId, quantity = 1){
  let matchingItem;

   cart.forEach( (cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
   });

   if(matchingItem){
    matchingItem.quantity += Number(quantity);
   }else{
    cart.push({
    productId: productId,
    quantity: Number(quantity),
    deliveryOptionId: '1'
  }); 
   }

   saveToStorage();
}

// Removes a product from the cart
export function removeFromCart(productId){
  const newCart = [];

  cart.forEach( (cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  });
  cart = newCart;
  saveToStorage();
} 

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

   cart.forEach( (cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
   });

   matchingItem.deliveryOptionId = deliveryOptionId;
   saveToStorage();
};


/*
export function loadCart(fun) { //the function that we provide to loadProducts this is know as a call back
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://supersimplebackend.dev/cart');

  xhr.addEventListener('load', () => {
      console.log(xhr.response);
      fun();
  });

  xhr.send();//send the request but doesn't wait for response(asynchronous)
}*/

export function loadCart(fun) { //the function that we provide to loadProducts this is know as a call back
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
      const xhr = new XMLHttpRequest();
      
     fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();//send the request but doesn't wait for response(asynchronous)
}