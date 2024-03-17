var express = require("express")

var app = express()

const userList = [{
    id:1,
    name:'张三',
    age:20
},{
    id:2,
    name:'李四',
    age:21
},{
    id:3,
    name:'王五',
    age:22
}]

app.get('/',function(req,res) {
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(userList))
})

app.listen(3000,function(){
    console.log('The service is running on port 3000')
})