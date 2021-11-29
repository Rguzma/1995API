const {PeopleModel} = require( '../model/peopleModel.js' );


const PeopleController ={
    allPeople: function(request, response){
        PeopleModel.findAll()
        .then(data => response.json(data))
        .catch(err => response.json(err));
    },


    seePerson: function(request, response){
        // console.log("The mongoose id requested is: ", request.params._id);
        let name = request.params.name;
        console.log(name);
        PeopleModel.findPerson(name)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },

    createPerson: function(request, response){
        // console.log("The mongoose id requested is: ", request.params._id);
        let name = request.params.name;
        PeopleModel.save(name)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },

    removePerson: function(request, response){
        // console.log("The mongoose id requested is: ", request.params._id);
        let name = request.params.name;
        PeopleModel.delete(name)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },


}


module.exports = {
    PeopleController
};