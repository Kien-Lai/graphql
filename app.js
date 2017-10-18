var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var graphqlServer = require('graphql-server-express');
var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/graphs');

app.use('/graphql', bodyParser.json(), graphqlServer.graphqlExpress({
    schema
}));

app.use('/graphiql',graphqlServer.graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(3000, (err) => {
    if(err) {
        console.log('Error ocured...');
    } else {
        console.log('Server is running at port 3000...');
    }
});