const express = require('express'); //express 框架 
var bodyParser = require('body-parser');
var xml2js=require('xml2js');

var app = express();//实例express框架

app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/', function (req, res) {
    req.rawBody = '';//添加接收变量
    var json = {};
    var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true})
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        req.rawBody += chunk;
    });
    req.on('end', function () {
        // json = xml2js.toJson(req.rawBody);
        // res.send(JSON.stringify(json));
        xmlParser.parseString(req.rawBody, function (err, result) {
            //将返回的结果再次格式化
             console.log(JSON.stringify(result));
             res.send("success");
          });
    });
});

//监听800端口
app.listen(800);