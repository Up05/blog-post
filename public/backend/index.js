const express = require('express')
const app = express();

app.use(express.static("D:/Ult1/misc_GameGraphics/c_Javascript/blog-page/public"));

console.log("Server started on localhost:3100")

app.get('/', function(req, res){

    res.set({
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    })
    res.sendFile("D:/Ult1/misc_GameGraphics/c_Javascript/blog-page/public/index.html")

})


app.listen("3100", function () { })