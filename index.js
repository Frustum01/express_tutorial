import express from "express"
import student from "./express.js"
const app = express();

// Routes

app.get("/",(req,res)=>{
    res.send("<h1>hello</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1> thiis was about</h1>");
});


// multiple function
// 1] double or many use next to call second and other

app.get("/double",(req,res,next)=>{
    console.log("first function");
    next();
},(req,res)=>{
    res.send("Second function")
});

// by using array of callbacks

const cb1=(req,res,next)=>{
    console.log("first");
    next();
};
const cb2=(req,res,next)=>{
    console.log("second");
    next();
};
const cb3 = (req,res) => {
    res.send("3 callback throungh array")
}
const cb =[cb1,cb2,cb3];
app.get("/array",cb);

// Crazy Callbacks

app.get("/crazy",[cb1,cb2],(req,res)=>{
    res.send("Crazzy hai ya tho")
});


// Express route
app.route("/express").get((req,res)=>{console.log("get")}).post((req,res)=>console.log("post")) // and go on for all 


// froom other page

app.use("/student",student);



app.listen(8000,()=>{
    console.log("kya haal hai bhai");
});