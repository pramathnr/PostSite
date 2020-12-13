const express =require('express');
const app=express();
const port=8080||process.env.port;
const bodyParser=require('body-parser');
const router=require('./routes/post');
const users=require('./routes/users');
//const checkAuth=require('./middleware/checkauth');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type');
    next();
});
app.use(bodyParser.json());
app.use('/user',users);
app.use('/api',router);
app.listen(port,()=>{
    console.log("server started at port "+port);
})