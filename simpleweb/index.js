const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Assalamu A\'laimuk. Hi there, I am back again!');
});

app.listen(8080, () => {
	console.log('Listening on port 8080');
});
