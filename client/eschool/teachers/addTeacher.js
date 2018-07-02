Template.addTeacher.onCreated(function() {
	var self = this;
	self.autorun(function() {
        self.subscribe('teachers');
        self.subscribe('accounts');
	});
});

AutoForm.addHooks(['insertTeacherForm'], {
	onSuccess: function(operation, result, template) {
		FlowRouter.go('teachers');
	    Bert.alert("successfully added the teacher", 'success');
	}
});
