Template.Grade_Details.onCreated(function(){
    var self = this;
});

Template.Grade_Details.helpers({ 
    grade: () => {
        var id = FlowRouter.getParam('id');
        return Grades.findOne({_id: id});
    }
}); 

Template.Grade_Details.events({ 
    'click #foo': function(event, template) { 
         
    } 
}); 
