
let express = require("express");
let app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Autorization");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({})
    }
    next();
});

app.get("/", (req, resp) => {
    resp.send(players);
});

app.post("/", (req, resp) => {
    let info = req.body;
    console.log(info);
})

app.listen(3000, () => console.log("Server is on..."));
let players =
[
    {
        "lastname": "Rooney", 
        "firstname": "Wayne", 
        "team": "DC United", 
        "country": "England"
    },
    {
        "lastname": "Ronaldo", 
        "firstname": "Cristiano", 
        "team": "Juventus", 
        "country": "Portugal"
    },
    {
        "lastname": "Messi", 
        "firstname": "Lionel", 
        "team": "Barcelona", 
        "country": "Argentina"
    }
]

