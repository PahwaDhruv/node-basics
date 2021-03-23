const fs = require('fs');

const readStream = fs.createReadStream('./temp/lipsum.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./temp/write-stream.txt');

// readStream.on('data', (chunk) => {
//     console.log('---------New Chunk-----------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);