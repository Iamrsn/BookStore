const express=require("express");
const app = express();
require("dotenv").config()
app.get("/",(req,res)=>{
    res.send("working")
})

const cors = require("cors")
app.use(cors());
app.use(express.json());

//route fetch
app.use("/book",require("./routes/BookRoutes"))
app.use("/user", require("./routes/UserRoute.js"));

// Db setup
const connectDb = require("./config/db")
connectDb();
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server running on port no.${PORT}`)
})