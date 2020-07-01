const express = require('express');
const path = require('path');
const request = require("request");
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

var options = {
    method: 'GET',
    url: 'https://billboard-api2.p.rapidapi.com/hot-100',
    qs: {date: '2019-05-11', range: '1-10'},
    headers: {
      'x-rapidapi-host': 'billboard-api2.p.rapidapi.com',
      'x-rapidapi-key': 'b6be7d093bmsh4e847c4f9776906p118f6cjsn17cea4958cd0',
      useQueryString: true
    }
  };
  

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });



    app.get('/api/getBillboard', (req, res) => {
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var parsedBody = JSON.parse(body);
            console.log(parsedBody);
            res.send(parsedBody);
        })
    });





const port = process.env.PORT || 4920;
app.listen(port);

console.log('App is listening on port ' + port);