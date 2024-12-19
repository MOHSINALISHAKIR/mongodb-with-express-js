const express=require("express");
const app=express();
const port =8080;
const path =require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
var methodOverride = require('method-override');
app.use(methodOverride('_method'))
const { log } = require("console");
main().then(()=>{
    console.log("connected");
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
// let chat1= new Chat({
//     from:"usman",
//     to:"liaqat",
//     msg:"send me your cv",
//     created_at: new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
    
// });
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log("start listing at port 8080");
    
});

app.get("/",(req,res)=>{
    res.send("working well")
});
//HOME PAGE
app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    // console.log(chats);
    // res.send("well")
    
    res.render("home.ejs",{chats})
});

//NEW PAGE
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
});
//CREATE PAGE
app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;

    let newchat=new Chat({
        from:from,
        msg:msg,
        to:to, 
        created_at:new Date(),
    });

    newchat.save().then(()=>{
        console.log("saved into db");
        
    }).catch((err)=>{
        console.log(err);
        
    });
    res.redirect("/chats");
    
    
})
//edit
app.get("/chats/:id/edit", async ( req,res)=>{
    let {id}=req.params;
    // console.log(id);
    
    let fchat= await Chat.findById(id);

    
    res.render("edit.ejs",{ fchat})
});
//update 

app.put("/chats/:id",async ( req,res)=>{

    let {id}=req.params;
    let {msg:newchat}=req.body;
    let uchat= await Chat.findByIdAndUpdate(id,{msg:newchat},{runValidators:true,new:true});
    console.log(uchat);
    res.redirect("/chats")

})
//DELETE
app.delete("/chats/:id", async (req,res)=>{
    let {id}= req.params;
    let dchat=  await Chat.findByIdAndDelete(id);
    console.log(dchat);
    
    res.redirect("/chats");



})