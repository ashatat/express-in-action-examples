const express = require('express');

const app = express();

app.get('/random/:min/:max', (req, res) => {
    const { min, max } = req.params;

    if (isNaN(min) || isNaN(max)) {
        res.status(404).json({ error: 'Bad request.'});
        return;
    }

    const result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result });
});

app.listen(3000, () => console.info('API server is up on ', 3000));
