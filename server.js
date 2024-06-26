const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + "/dist/frontend"));
app.get("/*", function(req, res){
    res.sendFile(path.json(__dirname + "dist/frontend/index.html"))
})

app.listen(process.env.PORT || 8081)
console.log('Serveur démarré !')