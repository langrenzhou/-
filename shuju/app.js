var mysql = require("mysql");
var express = require("express");
var fs = require("fs");
var app = express()
var lianjie = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "010527",
    database: "yuedu"
})
lianjie.connect();
// 类型接口
app.all("/mysql", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    var sql = "select * from t_types;"
    lianjie.query(sql, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
            res.end(err)
        }
    })
})
// 注册信息
app.all("/register", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    console.log("这是regist")
    req.on("data", (ds) => {
        console.log("注册时监听到了")
        var data_register = "";
        var data_rigt_one = JSON.parse(data_register += ds);
        // 先进行查询再进行注册
        var register_s_eql = `select * from t_users where username="${data_rigt_one.name}" and password="${data_rigt_one.psd}" and email="${data_rigt_one.email}";`
        lianjie.query(register_s_eql, function (err, result) {
            if (result.length > 0) {
                res.send('该用户名已被注册')
            } else {
                var regi_sql = `insert into t_users set username="${data_rigt_one.name}",password="${data_rigt_one.psd}",email="${data_rigt_one.email}",nikiname="${data_rigt_one.name}";`
                lianjie.query(regi_sql, function (err, result) {
                    res.send(result);
                    res.end(err)
                })
            }

        })
    })
})
// 登录信息
app.all("/login", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    console.log("这是login")
    req.on("data", (sd) => {
        console.log("登录时监听到了")
        var data_login = ""
        var data_lign_one = JSON.parse(data_login += sd)
        var login_mysql = `select * from t_users where username='钟宇' and password='2131321'`;
        lianjie.query(login_mysql, function (err, result) {
            res.send(result)
            res.end(err)
        })
    })
})
//做内容页数接口
app.all("/content_page", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    var type_id=parseInt(req.query.type_id)
    var sql = `select * from t_articles where type_id=${type_id};`
    lianjie.query(sql, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
            res.end(err)
        }
    })
})
// 内容的接口
app.all("/content", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    var type_ids=parseInt(req.query.type_id);
    var page=(parseInt(req.query.page)-1)*10
    var sql = `select * from t_articles where type_id=${type_ids} limit ${page},10;`
    lianjie.query(sql, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
            res.end(err)
        }
    })
})
// 详情页的接口
app.all("/details", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
        var id=req.query.id
        var login_mysql = `select * from t_articles where id=${id}`;
        lianjie.query(login_mysql, function (err, result) {
            res.send(result)
            res.end(err)
    })
})
app.listen("3030", function () {
    console.log("端口号是127.0.0.1:3030")
})