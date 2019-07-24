const server = require('express').Router();
const bodyParser = require('body-parser');
const pService= require('../services/ProductService').ProductService;
const productService= new pService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all users
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        productService : productService.getAllproducts()
    }));
});


server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        productService : productService._add(req.body)
    }));
});
server.post('/searchname',(req,res)=>{
    setContentHeader(res);
    const productexist= productService.search(rq.body.name);
    
});

module.exports.productRoutes = server;
