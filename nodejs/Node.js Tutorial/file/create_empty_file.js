var fs = require('fs');

fs.open('text.txt', 'w+', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});