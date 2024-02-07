const fs = require("fs")
//read

// fs.readFile('./index.html', 'utf-8', function(err,data){
//     const content = data;
//     console.log(content);
// })


//update
fs.appendFile('server3.js', '  Hello content!', function (err) {
    if (err) throw err;
    console.log('update!')});

//write if there is no file
// replace if there is a file
fs.writeFile("server3.html",'my text', ()=>{
    console.log("fichier cree")
});


// delete
fs.unlink('server3.js',  function (err) {
    if (err) {console.log('err')}
    else {console.log('deleted')}
});