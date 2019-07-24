const cart = require('../dbs/cart').cart;
const Email = require('./email.service').Email;
const emailService = new Email();

class Service {
    constructor(){
        
        this.cart = cart
    }
    buy(user){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${user.name}</b></div>
                    <div>Thank you for registering</div>`,
            from : null,
            to : user.email
        }
        emailService.emailWithAttachment(userObj);
    }
}

module.exports.Service = Service