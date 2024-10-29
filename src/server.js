const express = require("express");
const app = express();

const userRoutes = require("./routes/user-route");

const productRoutes = require('./routes/product-route');

app.use(productRoutes);

app.use(userRoutes);

app.listen(3000, () =>{
    console.log("http://localhost:3000");
});

