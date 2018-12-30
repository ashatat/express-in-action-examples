const express = require('express');
const path = require('path');
const zipdb = require('zippity-do-dah');
const ForecastIo = require('forecastio');

require('dotenv').config();

const app = express();
const weather = new ForecastIo(process.env.DARK_SKY_KEY);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get(/^\/(\d{5})$/, (req, res, next) => {
    const zipcode = req.params[0];
    const location = zipdb.zipcode(zipcode);
    if (!location.zipcode) {
        next();
        return;
    }

    const { latitude, longitude } = location;

    weather.forecast(latitude, longitude, (err, data) => {
        if (err) {
            next();
            return;
        }
        res.json({
            zipcode,
            temperature: data.currently.temprature
        });
    });
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => console.info(`server is up on port ${3000}`));
