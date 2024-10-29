const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const userRoutes = require("./routes/user-route");

const productRoutes = require('./routes/product-route');

app.use(userRoutes);

app.use(productRoutes);

app.listen(3000, () =>{
    console.log("http://localhost:3000");
});

