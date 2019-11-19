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
    req.on("data", (ds) => {
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
    req.on("data", (sd) => {
        var data_login = ""
        var data_lign_one = JSON.parse(data_login += sd)
        var login_mysql = `select * from t_users where username='${data_lign_one.name}' and password='${data_lign_one.psd}'`;
        lianjie.query(login_mysql, function (err, result) {
            res.send(result)
            res.end(err)
        })

    })
})
app.listen("3030", function () {
    console.log("端口号是127.0.0.1:3030")
})