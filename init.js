const mongoose=require("mongoose");
const Chat=require("./models/chat.js")
main().then(()=>{
    console.log("connected");
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');


}

let allchats=[
    {
      from: "alice@example.com",
      to: "bob@example.com",
      msg: "Hi Bob, how's everything going?",
      created_at:new Date(),
    },
    {
      from: "john.doe@example.com",
      to: "jane.doe@example.com",
      msg: "Can we catch up later this week?",
      created_at:new Date(),
    },
    {
      from: "support@service.com",
      to: "customer@example.com",
      msg: "Your request has been successfully processed.",
      created_at:new Date(),
    },
    {
      from: "notifications@app.com",
      to: "user123@example.com",
      msg: "You have a new message in your inbox.",
      created_at:new Date(),
    },
    {
      from: "newsletter@company.com",
      to: "subscriber@example.com",
      msg: "Check out our latest deals and updates!",
      created_at: new Date(),
    },
    {
      from: "emma.watson@example.com",
      to: "harry.potter@example.com",
      msg: "Are you ready for the weekend trip?",
      created_at: new Date(),
    },
    {
      from: "mark.z@example.com",
      to: "elon.musk@example.com",
      msg: "Looking forward to our meeting on Monday.",
      created_at:new Date(), 
    },
    {
      from: "team@startup.com",
      to: "investor@example.com",
      msg: "Here's the pitch deck for your review.",
      created_at: new Date(),
    },
    {
      from: "admin@webapp.com",
      to: "newuser@example.com",
      msg: "Welcome to our platform! Let us know if you need help.",
      created_at:new Date(),
    },
    {
      from: "sales@ecommerce.com",
      to: "shopper@example.com",
      msg: "Your order has been shipped! Track it here: example.com/track",
      created_at:new Date(),
    }
  ]
  

  Chat.insertMany(allchats);