const express = require("express");
const app =express();
console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("you contacted root ");
}); 


app.get("/:username/:id", (req, res) => {
    let {username, id} =req.params;
    res.send(`welcome to the  page of @${username}.`);
    
});
app.get("/search", (req, res)=> {
    let {q} = req.query;
    res.send(`<h1>search results for query ${q}</h1>`);
});