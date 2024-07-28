
const express = require('express');
const app = express(); 
const path = require('path');
const port = 80;


app.set('view engine', 'ejs');

//Express:
app.use('/static', express.static(path.join(__dirname,'src')));
app.use(express.urlencoded());


//Endpoints:
app.get('/',(req,res)=>
{
    // res.status(200).sendFile('views/index.html',{root:__dirname});
    res.status(200).sendFile(path.join(__dirname, 'src/views', 'index.html'));
});//This works too, so does the code above.

app.get('/aboutKaran',(req,res)=>
{
    res.status(200).sendFile(path.join(__dirname, 'src/views', 'aboutKaran.html'));
});





//Usage of Partials:
app.get('/myDegree',(req,res)=>
{
    res.status(200).render(path.join(__dirname,'src/views','myDegree'),{Title:"My Degree"});
});








//SERVER:
app.listen(80, () => {
    console.log("App started on Port: " + port);
});