let http = require('http');
let cors = require('cors')
let express = require('express');
let bodyParser = require('body-parser');

let priority = [{value: 1, label: "Acil"}, {value: 2, label: "Önemli"}, {value: 3, label: "Normal"}];

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/api/priority', function (request, response) {
    response.send(priority);
});

app.listen(1234);
