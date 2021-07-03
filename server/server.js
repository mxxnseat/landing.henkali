const rp = require("request-promise");
const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require('body-parser');
const indexHTML = path.join(__dirname,"../build/index.html");
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '../build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res)=>{
    res.sendFile(indexHTML);
});

app.post("/view", (req,res)=>{
    const {whoIs,id} = req.body;
    let data = fs.readFileSync(path.resolve(__dirname, `./jsons/${whoIs}.json`),{encoding:'utf8', flag:'r'});
    
    console.log(data);
    data = JSON.parse(data).map(value=>{
        if(value.id === id){
            return {
                ...value,
                views: value.views+1
            }
        }
        return value;
    });

    fs.writeFileSync(path.resolve(__dirname, `./jsons/${whoIs}.json`), JSON.stringify(data));


    res.json({
        status: 200,
        message: "ok"
    });
});
app.get("/news", (req,res)=>{
    try{
        const fileJSON = fs.readFileSync(path.resolve(__dirname, `./jsons/news.json`),{encoding:'utf8', flag:'r'});
        res.json({
            status: 200,
            data: fileJSON
        })
    }catch(e){
        res.json({
            status: 500,
            messaage: "Bad request"
        })
    }
});

app.get("/raffles", (req,res)=>{
    try{
        const fileJSON = fs.readFileSync(path.resolve(__dirname, `./jsons/raffles.json`),{encoding:'utf8', flag:'r'});
        res.json({
            status: 200,
            data: fileJSON
        })
    }catch(e){
        console.log(e);
        res.json({
            status: 500,
            messaage: "Bad request"
        })
    }
});



app.listen(PORT, err=>{
    if(err) return console.log(`Error: ${err}`);

    console.log(`Listen ${PORT} port`);
})