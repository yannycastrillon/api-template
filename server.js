var
  express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  apiRouter = require("./routes/api.js")


mongoose.connect("mongodb://localhost/song-tribe", (err)=>{
  console.log(err || "Connected to MongoDB (song-tribe)");
})

// Middleware (will run after a request, but before response):
app.use(logger("dev"));
app.use(bodyParser.json())



app.get("/", (req,res) => {
  res.json({message:"This is the root route..."});
})

// ApiRouter has a namespace with /songs
app.use("/songs", apiRouter)

app.listen(3000, (err)=>{
  console.log(err || "server running on 3000. Boomm!!!")
})
