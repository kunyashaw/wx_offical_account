var express = require('express');

let app = new express();

app.listen(3000);

//使用static中间件 将/static作为可在浏览器被访问得一个文件夹
app.use(express.static(__dirname+'/static'));

//当地址是index时，要访问/static/index.html
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+"/static/index.html");
})
app.get('/',(req,res)=>{
    res.send('hello world');
})