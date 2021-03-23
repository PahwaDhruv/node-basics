const fs = require('fs');

/* Folder Creation */
if(fs.existsSync('./asset')){
    /* Delete a folder */
    fs.rmdir('./asset', (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Folder deleted');
        }
    })
}
else{
    /* Create a new folder */
    fs.mkdir('./asset', (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Folder created');
        }
    })
}

/* File Creation & File Deletion */
if(fs.existsSync('./blog.txt')){
    /* Delete File */
    fs.unlink('./blog.txt', (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('File Deleted')
        }
    })
}
else{
    /* Create a File */
    fs.writeFile('./blog.txt', 'Hello World', () => {
        console.log('File Was Written');
    })

    /* Read a file */
    fs.readFile('./blog.txt', (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(data.toString());
        }
    })
}