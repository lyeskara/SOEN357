
const express = require('express');
const cors = require("cors");
const app = new express();
const fs = require('fs');

app.use(cors());


fs.readFile('food_dataset.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const obj = JSON.parse(data);
        return obj
    }
});


app.get('/foodItems', async (req, res) => {
    // const fetch = await import('node-fetch');
    // const url = "https://api.spoonacular.com/food/menuItems/search?query=dessert&number=1000&type=main+course&apiKey=c93874edf92f470aa79b9933920181b5"
    // const response = await fetch.default(url);
    // const data = await response.json();
    // res.json(data.menuItems)
    fs.readFile('food_dataset.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const obj = JSON.parse(data);
            res.json(obj)
        }
    });
})

app.get('/dessertItems', async (req, res) => {
    // const fetch = await import('node-fetch');
    // const url = "https://api.spoonacular.com/food/menuItems/search?query=dessert&number=1000&type=main+course&apiKey=c93874edf92f470aa79b9933920181b5"
    // const response = await fetch.default(url);
    // const data = await response.json();
    // res.json(data.menuItems)
    fs.readFile('dessert_dataset.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const obj = JSON.parse(data);
            res.json(obj)
        }
    });
})



app.listen(5000, () => {
    console.log('Server started on port 5000');
})