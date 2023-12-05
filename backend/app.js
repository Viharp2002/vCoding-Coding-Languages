require('dotenv').config();
const express = require("express");
const app = express();
require("./conn/conn");
const cors = require("cors");
require('dotenv').config();
const Language = require("./modules/makelang");
const PORT = process.env.PORT || 3900;

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // to support JSON bodies
app.use(bodyParser.urlencoded({ extended: false })); // to support URL-encoded bodies
 
app.use(cors());

//Show all languages
app.get("/alllang",async(req,res)=>{
    try {
        const data = await Language.find();
    
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(422).json({msg: error.message});
    }
})

//Admin makes new language
app.post("/newlang",async(req,res)=>{
    const token = req.headers["authorization"];

    const{lname,lshort,ldate,ldesc,llink,limage} = req.body;
    
    try {
        if(!token)
        {
            throw new Error("Login First");
        }
        if(!lname || !lshort || !ldate || !ldesc || !llink)
        {
            throw new Error("Fill all");
        }

        const make = new Language({
            lname: lname,
            lshort: lshort,
            ldate: ldate,
            ldesc: ldesc,
            llink: llink,
        })
        const ress = await make.save();
        res.json({msg: "Success"});
    } catch (error) {
        console.log(error);
        res.status(422).json({msg: error.message});
    }

})

//Admin Login
app.post("/loginadmin",async(req,res)=>{
    const{email,password} = req.body;
    try {
       
        if(!email || !password)
        {
            throw new Error("fill all");
        }
        const mail = process.env.MAIL;
        const pass = process.env.PASS;
       
        if(email!==mail || password!=pass)
        {
            throw new Error("Invalid creditianls");
        }

        const token = process.env.TOKEN;
        res.status(201).json({msg:token});

    } catch (error) {
        console.log(error);
        res.status(422).json({msg: error.message});
    }
})

//Admin delete any query
app.delete("/del/:id",async(req,res)=>{
    try {
        const id = req.params.id;
    
        const del = await Language.findByIdAndDelete(id);
        res.status(201).send(del);
    } catch (error) {
        res.status(422).json({msg:error.message});
    }
})

app.use(express.static(__dirname+"/client/build"));

app.use("*",(req,res)=>{
    res.sendFile(__dirname+ "/client/build/index.html");
});

app.listen(PORT,(req,res)=>{
    console.log("Ok");
})