const express = require('express');
const app = express();
app.get('/', (req,res)=>res.send('Hello from port 3001'));
app.listen(3001, ()=>console.log('listening 3001'));
