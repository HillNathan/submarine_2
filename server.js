require("dotenv").config();
const app = require("./config/express-config");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb://localhost/dbfor_submarine_2";

// connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("There is a problem with the connection" + err)
    } else {
        console.log("Mongoose connection is good.")
    }
});

//server is up and running
app.listen(PORT);
