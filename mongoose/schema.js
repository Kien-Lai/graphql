var mongoose = require('mongoose');
var schema = mongoose.Schema;

var toDo = schema({
    name: String,
    age: String,
    alone: Boolean,
    male: {
        type: String,
        validate: {
            validator: function(value){
                if(value !== 'male' && value !== 'female'){
                    return false;
                }
                return true;
            } 
            ,message: 'Name is one of male or female'
        }
    }
});

module.exports = mongoose.model('toDos', toDo);