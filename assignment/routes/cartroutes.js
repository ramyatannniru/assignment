const server = require('express').Router();
const bodyParser = require('body-parser');
const PService = require('../services/cartServices').CartItem;
const cartItem = new PService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all projects
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
     cartItem  : cartItem._all()
    }));
});

// add a new project
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        cartItem: cartItem._add(req.body)
    }));
});
server.post('/buy',(req,res)=>{
    cartItem.buy(req.body);
})

module.exports.cartRoutes = server;