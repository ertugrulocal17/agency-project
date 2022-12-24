const express = require("express");
const ejs = require("ejs");
const app = express();
const pageRoute = require("./routes/pageRoute");
const photoRoute = require("./routes/photoRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");

dotenv.config();

// Connect to database
mongoose.connect(process.env.URL).then(() => {
  console.log("Connected to database");
})

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload())
app.use(methodOverride("_method",{
  methods: ["POST", "GET"]
}))






app.use("/", pageRoute)
app.use("/photos",photoRoute)

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
