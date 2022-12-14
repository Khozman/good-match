const fs = require('fs');

fs.readFile('./csv_files/players.csv', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})