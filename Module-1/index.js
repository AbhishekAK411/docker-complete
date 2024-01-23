import express from "express";
import connectToDatabase from "./helpers.js";


const app = express();


app.get("/", (req,res) => {
    res.send("<h2>Dockers</h2>");
})

await connectToDatabase();

app.listen(3000);