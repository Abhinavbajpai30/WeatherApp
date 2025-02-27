const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server is now active!");
});