const express = require('express');
const os = require("os");
const app = express();



app.set('port', (process.env.PORT || 5000));

app.get('/api/whoami', function (req, res) {
    const ip = req.headers['x-forwarded-for'];
    const language = req.acceptsLanguages()[0];
    const operatingSystem = os.type() + '; ' + os.platform() + '; ' + os.arch();
    const resultObj = {};
    resultObj.ipaddress = ip;
    resultObj.language = language;
    resultObj.software = operatingSystem;
    
    console.log(operatingSystem);
  res.send(resultObj)
})

app.listen(app.get('port'), function() {
  console.log('Header parser app is running on port', app.get('port'));
});
