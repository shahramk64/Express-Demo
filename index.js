var express = require('express');

const app = express();
const courses=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];
app.get('/', function (req, res)
{
    res.send('hello world');

});

app.get('/api/courses', function (req,res)
{
    res.send(courses);
})

app.get('/api/courses/:id', function (req,res)
{
    const c = courses.find(c => c.id == parseInt(req.params.id));
    if(!c)
        res.status(404).send('The course with that Id was not found!');
    else
        res.send(c);

})

const port = process.env.PORT || 3000;
app.listen(port, function()
{
    console.log(`listening to port ${port}...`, port);
});