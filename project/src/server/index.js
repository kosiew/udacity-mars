require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

// your API calls

// example API call
app.get('/apod', async (req, res) => {
    try {
        console.log('fetching apod');
        const image = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
            .then(res => res.json());
        res.send({ image });
    } catch (err) {
        console.log('error:', err);
    }
})

app.get('/images', async (req, res) => {
    try {
        console.log('fetching rover images');
        const rover = req.query.rover;
        const date = req.query.date;
        console.log(`rover = ${rover} date = ${date}`);
        if (rover && date) {
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${process.env.API_KEY}`;
            console.log(`url = ${url}`);
            const result = await fetch(url)
                .then(res => res.json());
            console.log('sending res for images');    
            console.group('images');
            const { photos } = result;
    
            console.log( `there are ${photos.length} photos` );
            console.groupEnd();
    
            res.send(result);            
        } else {
            console.log('incomplete parameters -> not responding')
        }


    } catch (err) {
        console.log('error:', err);
    }
})

app.get('/rover', async (req, res) => {
    try {
        console.log('fetching rover');
        const rover = req.query.rover;
        console.log(`rover = ${rover}`);
        const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${process.env.API_KEY}`;
        console.log(`url = ${url}`);
        const result = await fetch(url)
            .then(res => res.json());
        console.log('sending res for rover');    
        console.group('rover');
        const { photo_manifest } = result;

        console.log(`name: ${photo_manifest.name} status: ${photo_manifest.status} total photos: ${photo_manifest.total_photos}`);
        console.groupEnd();
        res.send(result);
    } catch (err) {
        console.log('error:', err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))