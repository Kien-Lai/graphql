var graphql = require('graphql');

var {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = graphql;

var toDos = require('../../mongoose/schema');

var toDoType = new GraphQLObjectType({
    name: 'todo',
    description: 'todo item',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'name of item',
        },
        age: {
            type: GraphQLString,
            description: 'age of item',
        },
        alone: {
            type: GraphQLBoolean,
            description: 'status of relative',
        },
        male: {
            type: GraphQLString,
            description: 'male'
        },
    })
});

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            todo : {
                type: new GraphQLList(toDoType),
                args: {
                    name: {
                        name: 'id of item',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (root, {name}) => {
                    console.log('aaa', root);
                    return toDos.find({name})
                }
            }
        }
    })
})

module.exports = schema;