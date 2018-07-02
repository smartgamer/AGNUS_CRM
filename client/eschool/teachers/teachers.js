import { selectors } from "griddle-react";

Template.teachers.onCreated(function() {
	var self = this;
	self.autorun(function(){
        // self.subscribe('userImage');
		self.subscribe('teachers');
		self.subscribe('accounts');
		
	});
});

Template.teachers.helpers({
	
	settings: function () {
        return {
            collection: 'teachersList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id', hidden: true },
                { key: 'code', label: 'Código' },
                { key: 'name', label: 'Nome' },
                { key: 'gender', label: 'Sexo' },
            ],
            useFontAwesome: true,
            rowClass: '',
            group: 'accounts'
        };
	},
	
	// query() {
	// 	return Template.instance().searchQuery.get();
	// },
	// teacher: ()=> {
		
	// 	console.log(teachersList);
	// 	return  teachersList;
	// }
});

Template.teachers.events({
    'click .ListTeachers tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        console.log(post._id);
        FlowRouter.setParams({ id: post._id });
        FlowRouter.go('/teacher/' + post._id);
    },
    'click .new-Account': function () {
        Session.set('NewAccount', true);
    }
});
