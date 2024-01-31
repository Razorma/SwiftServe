import  express  from "express";
import session from "express-session";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
dotenv.config();

const app = express()

app.get("/",(req,res,next)=>{
    res.send("I love books")
})

const port = process.env.PORT || 3024
app.listen(port,()=>{
    console.log(`app listening on port http://localhost:${port}`)
})