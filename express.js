import express from "express"
import addnew from "./controllers/Student_c.js"

const router = express.Router();

router.get("/another",(req,res)=>{
    res.send("this is from another page");
});



export default router;
