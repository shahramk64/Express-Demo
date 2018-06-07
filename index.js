var express = require('express');

const app = express();

app.get('/', function (req, res)
{
    res.send('hello world');

});

app.get('/api/courses', function (req,res)
{
    res.send([1,2,3]);
})

app.listen(3000, function()
{
    console.log('listening to port 3000...');
});