import { renderOrderSummary } from "../../scripts/checkout/orderSummary";
import {loadFromStorage} from '../../data/cart.js';


describe('test suite: renderOrderSummary', () => {
    it('dispays the cart', () => {
        document.querySelector('.js-order-summary').innerHTML = `
        <div class="js-order-summary"></div>` ;

         spyOn(localStorage, 'getItem').and.callFake(() => {
                    return JSON.stringify([{
                        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                        quantity: 1,
                        deliveryOptionId: '1'
                    }]);
                });
                //console.log(localStorage.getItem('cart'));
                loadFromStorage();
    })
});