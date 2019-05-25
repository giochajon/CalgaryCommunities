const express = require('express')
const queries = require('./kinexBase.js')
//   for this one to work we installed express: npm install express
const cors = require('cors')


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Calgary community info </h1><br><p>add /community for the array or the /community/NAME to retreive the data, compare by using /compare/community1/community2</p> ")

})

let a = []
queries.get_community_list().then(x => formatArray(x));

app.get('/community', cors(), (req, res) => {
    res.send(a)
})

function formatArray(x) {
    x.forEach(function(item) {
        a.push(item.name);
    });

}


app.get('/community/:name', cors(), (req, res) => {
    queries.get_community_by_name(req.params.name).then(x => res.send(x));
})

app.get('/compare/:comm1/:comm2', cors(), (req, res) => {
    //queries.get_community_by_name(req.params.name).then(x => res.send(x));
    //res.send (req.params.comm1+ " and  " +req.params.comm2)
    queries.get_compare_two(req.params.comm1, req.params.comm2).then(x => res.send(x));

})


//app.listen(3000);
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});