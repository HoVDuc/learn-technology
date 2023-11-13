const fs = require('fs');

fs.rename('index.html', 'index1.html', function(err) {
    if (err) throw err;
    console.log('File renamed!');
});