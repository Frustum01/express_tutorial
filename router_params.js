import express from "express"
import addnew from "./controllers/Student_c.js"
const app = express();

app.get("/get/:id",(req,res)=>{
    res.send(req.params.id)
    const { id } = req.params;
    console.log(id);
});


// app.param

app.param("age",(req,res,next,id)=>{
    console.log(id);
    next();
});

app.param("age",(req,res,next,id)=>{
    console.log(`using this second time ${id}`);
    next();
});



app.get("/param/:age",(req,res)=>{
    res.send("got the id");
})


//controller 

app.get("/controller", addnew);

app.listen(8000,()=>{
    console.log("Start ho gya bhai");
});

