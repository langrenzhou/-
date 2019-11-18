var mysql=require("mysql");
var express=require("express");
var fs=require("fs");
var app=express()
var lianjie=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"010527",
    database:"yuedu"
})
lianjie.connect();
app.all("/mysql",function(req,res){
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    var sql="select * from t_types;"
    lianjie.query(sql,function(err,result){
      if(err){
          res.send(err)
      }else{
          res.send(result)
          res.end(err)
      }
    })
})
app.listen("3030",function(){
    console.log("端口号是127.0.0.1:3030")
})