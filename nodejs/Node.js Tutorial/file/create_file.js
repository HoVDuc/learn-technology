var fs = require('fs');

fs.appendFile('content.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
})