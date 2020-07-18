const app = require('./server.js');

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ***\n`);
});