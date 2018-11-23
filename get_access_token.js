var access_token = "";
var weixin_url_home = 
"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxc16ceb98ec30575b&secret=6eaaf1a7eb26bf1af7d8033a340ff98e";

var requestData =   {
    "button":[
    {    
         "type":"click",
         "name":"今日歌曲",
         "key":"V1001_TODAY_MUSIC"
     },
     {
          "name":"菜单",
          "sub_button":[
          {    
              "type":"view",
              "name":"搜索",
              "url":"http://www.soso.com/"
           },
           {
              "type":"click",
              "name":"赞一下我们",
              "key":"V1001_GOOD"
           }]
      }]
}

var request = require('request');

request.get(weixin_url_home,function(err,response,body){
    console.log(typeof body);
    var body_json = JSON.parse(body); //将json类型的字符串转为js对象，字典。
    var access_token = body_json["access_token"];
    console.log(access_token);
    request.post({
        url: "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + access_token,
        body: requestData,
        json: true
        }, (err, res, body) => {
        console.log(body)
    })
})