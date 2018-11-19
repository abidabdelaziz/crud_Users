const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Helps match os file calls
const mongoose = require("mongoose");
const {User} =require("./models/user")
const ObjectId = require('mongodb').ObjectID;
const app = express();
const PORT= process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/users",{ useNewUrlParser: true })

app.use(express.static("../client/build"));

app.get("/all/users",(req,res) => {  

    User.find({}).then(response => res.json(response))

})

app.post("/add/user", (req,res)=>{
    
    console.log(req.body)
    User.create(req.body).then(response =>{
        res.json(response) 
    })
    // res.json(true)
})

app.post("/update/user",(req,res)=>{

    console.log(ObjectId(req.body._id), typeof ObjectId(req.body._id))
    User.updateOne({"_id" : ObjectId(req.body._id),},
    {$set : {"user" : req.body.user,
             "email":req.body.email,
    
    }}).then(response =>{
        res.json(response)
    })
})


app.post("/delete/user",(req,res)=>{

    console.log(req.body)
    User.deleteOne({"email" : req.body.email}).then(response =>{
        res.json(response)
    })
})


//catch all
app.use(function(req,res){
    res.sendFile(path.join(__dirname,'../client', '/build.index.html'))
})



app.listen(PORT, function(){
    console.log(`API server npw listeniong on ${PORT}`)
})