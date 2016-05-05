var express = require('express');
var ParseServer = require('./lib').ParseServer;
var app = express();
var morgan = require('morgan');

// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
var api = new ParseServer({
    databaseURI: 'mongodb://cetaMongoAdmin:Matthew2414@127.0.0.1:27017/CETA',
    cloud: '/home/bitnami/CETASpecGuide/server/cloud/main.js',
    appId: 'lMIw8EtAOwtH4iWYuZITlvBvID6q82o3IHElchD3',
    masterKey: 'mGeuOSU7H3elCZVNJrcGPIRbLyUBstRBMLk57rCB',
    fileKey: '0aa0fd4e-eb06-45d8-8c07-2ee356e5762c',
    serverURL: 'http://localhost:1337/1',
    clientKey: '5J2u1yoxUAdRODNATaTgVkRTL7k2JG6wq1TO5lqt',
    restAPIKey: 'PGyyGMQP4wUyQ7UQDUzimaLmHqIB18ZutPuWhI7k',
    javascriptKey: 'TfrDJ6nOwS1DsTl4Dg8lD8R4BvfjABo3w9NMRyQL',
    dotNetKey: 'S0OsKLoYMV0XyMSs8nSClLnjIJW2F5AlMmhfsQKS'
});

app.use(morgan('dev'));

// Serve the Parse API on the /parse URL prefix
app.use('/1', api);
// Hello world
app.get('/', function(req, res) {
    res.status(200).send('Express is running here.');
});

var port = 1337;
app.listen(port, function() {
    console.log('parse-server running on port ' + port);
});
            
