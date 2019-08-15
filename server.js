const express = require("express");

//Initialize express
const app = express();

//Use express built-in body parser
app.use(express.json());

const port = 5000;

//Initialize server
app.listen(port, () => console.log(`Server running on port ${port}`));
