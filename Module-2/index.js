import express from "express";

const app = express();

let userGoal = "Docker!";

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", (req,res) => {
    
});

app.post("/store-goal", (req,res) => {
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    userGoal = enteredGoal;
    res.redirect("/");
});

app.listen(80);