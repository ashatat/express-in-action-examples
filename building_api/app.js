const express = require('express');

const app = express();

app.get('/random/:min/:max', (req, res) => {
    let { min, max } = req.params;

    max = Number(max);
    min = Number(min);

    if (isNaN(min) || isNaN(max)) {
        res.status(404).json({ error: 'Bad request.'});
        return;
    }

    const randomNum = Math.random();
    const result = Math.round((randomNum * (max - min)) + min);
    res.json({ result });
});

app.listen(3000, () => console.info('API server is up on ', 3000));
