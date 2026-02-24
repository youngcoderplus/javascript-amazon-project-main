import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { /*loadProducts*/ loadProductsFetch } from "../data/products.js"; 
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js' ;     
//import '../data/backend-practice.js';

    async function loadPage(){
        //console.log('load page');
        
       await loadProductsFetch();

       await new Promise((resolve) => {
        loadCart(() => {
            resolve();
    });
    });

        renderOrderSummary();
        renderPaymentSummary();
 
        //return 'value2';
    }
    loadPage()/*.then((value) => {
        console.log('next step');
        console.log(value); 
    });*/


    /*
 Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
    })
    })

 ]).then((values) => {
        console.log(values);
        renderOrderSummary();
        renderPaymentSummary();
 });
*/

/*
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
 });*/ 

 /*
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


*/

/*
loadProducts(() => {  //call back function, so it will run this after loadProducts is finished
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
    
});//Saved in fun
 */