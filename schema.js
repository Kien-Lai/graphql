var Router = require('express').Router();
var graphqlTools = require('graphql-tools');
var toDos = require('./mongoose/schema');

var typeDefs = `
type Person{
    age: Int!,
    name: String!,
    male: String!,
    alone: Boolean!,
    test: Int!,
}

type Query {
    getInfo: [Person]
}
`;

var resolvers   = {
    Query: {
        getInfo() {
            return toDos.find({});
        }
    },
    Person: {
        test(getInfo) {
            console.log(getInfo.age);
            return 1;
        }
    }
}

module.exports = graphqlTools.makeExecutableSchema({typeDefs, resolvers });