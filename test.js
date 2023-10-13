const express = require('express')
const app = express();
const port = 3000

let x = 0;

function addOne() {
    x = x + 1;
}

addOne();


app.get('/add', function (req, res) {

    res.send(`${x}`);
})

console.log(`Server is running on port ${3000}`);
app.listen(port)

