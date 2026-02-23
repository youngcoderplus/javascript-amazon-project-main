import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js"; 
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js' ;     
//import '../data/backend-practice.js';

 Promise.all([
    new Promise((resolve) =>{
    loadProducts(() => {
        resolve('value1'); //We call resolve to go to the next step
    });
}),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
    })
    })

 ]).then((values) => {
        renderOrderSummary();
        renderPaymentSummary();
        console.log(values);
 });

new Promise((resolve) =>{
    loadProducts(() => {
        resolve('value1'); //We call resolve to go to the next step
    });

}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
    })
    }) 

}).then(() => {
        renderOrderSummary();
        renderPaymentSummary();
});


/*
loadProducts(() => {  //call back function, so it will run this after loadProducts is finished
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
    
});//Saved in fun
 */