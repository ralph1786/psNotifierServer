const express = require("express");
const axios = require("axios");

//Initialize express
const app = express();

//Use express built-in body parser
app.use(express.json());

//Used api.github.com/gists/ to search for specific gist
const githubGistApi = "https://api.github.com/gists/";
const gistId = "e797e3f732ed9917df40fae62afa5cce";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${githubGistApi}${gistId}`);
    //Extract content from response
    const markdownContent = response.data["files"]["psFeatures.md"].content;
    res.status(200).json({ info: markdownContent });
  } catch (error) {
    res.status(400).json({ message: "Gist Not Found" });
  }
});

const port = 5000;

//Initialize server
app.listen(port, () => console.log(`Server running on port ${port}`));
