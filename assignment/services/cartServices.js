const cart = require('../dbs/cart').cart;
const Email= require('./email.service').Email;
const setContentHeader = require('../services/utils').setContentHeader;
const utils= require('../services/utils').utils;

const emailService = new Email();
class CartItem {

    constructor(){
        this.cart = cart;
    }
    _all(){
        return this.cart;
    }
    _add(cart){
        this.cart.push(cart);
        return this.cart;
    }

    buy(user){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${user.name}</b></div>
                    <div>Thank you for registering</div>`,
            from : null,
            to : user.email
        }
        emailService.email(userObj);
    }
}
module.exports.CartItem=CartItem;