const express = require('express');
const ua = require("ua-parser");
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res){
    res.redirect('/api/whoami');
});

app.get('/api/whoami', function (req, res) {
    const ip = req.headers['x-forwarded-for'];
    const language = req.acceptsLanguages()[0];
    var operatingSystem = ua.parse(req.headers['user-agent']).os.toString();
    const resultObj = {};
    resultObj.ipaddress = ip;
    resultObj.language = language;
    resultObj.software = operatingSystem;
    res.send(resultObj);
});

app.listen(app.get('port'), function() {
  console.log('Header parser app is running on port', app.get('port'));
});
