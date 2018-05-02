Template.school_Dasboard.onCreated(function() {
	var self = this;
	self.autorun(function() {
		// var id = FlowRouter.getParam('id');
        // self.subscribe('singleSchool', id);
        self.subscribe('companies');
	});
});

Template.school_Dasboard.helpers({
    school: ()=> {
        var id = FlowRouter.getParam('id');
        return Companies.findOne({_id: id});
		//return Schools.findOne({_id: id});
	}
});

// AutoForm.addHooks(['updateSchoolId'], {
// 	onSuccess: function(operation, result, template) {
//         var id = FlowRouter.getParam('id');
// 		FlowRouter.go('home');
// 	    Bert.alert("successfully updated", 'success');
// 	}
// });
