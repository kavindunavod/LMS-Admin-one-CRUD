const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors=require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the USER API");
    // or you can redirect to /users
    // res.redirect("/users");
});

mongoose.connect("mongodb+srv://admin:1fwGnDdxFUrVD2Ab@cluster0.yrzd7c6.mongodb.net/")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server running on the port 5000"));
})
.catch((err) => console.log(err));
