const express=require('express');
const bodyparser=require('body-parser')
const cors=require('cors');
const user=require("./contollers/User")

const app=express();
app.use(bodyparser.json())
app.use(cors());

app.get('/',user)

app.listen(3000, ()=>{
    console.log("server running on port 3000")
})