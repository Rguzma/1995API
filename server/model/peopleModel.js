const mongoose = require( 'mongoose' );
const nineteenfiftyfiveSchema = new mongoose.Schema({
    name: String,
})

const People = mongoose.model('people', nineteenfiftyfiveSchema);

const PeopleModel = {
    save: function(name){
        return People.create({name:name});
    },
    findAll: function(){
        return People.find();
    },
    findPerson: function(name){
        return People.findOne({name:name});
    },

    delete: function(name){
        return People.findOneAndRemove({name:name});
    }

}


module.exports = {
    PeopleModel
};