const express = require('express');

const app = express();

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-',"Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS');
});

app.get('/', (req, res) => {
    res.send('yay');
});

app.get('/', (req, res) => {
    res.send('home');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('READY');
});