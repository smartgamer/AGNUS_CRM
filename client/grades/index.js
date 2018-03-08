Template.Grade_Index.onCreated(function(){
    var self = this;

});

Template.Grade_Index.helpers({
    accounts: () => {
        return Grade.find({});
    },

    settings: function () {
        return {
            collection: 'GradesList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'code', label: Grades.simpleSchema().label()['code']},
                { key: 'desc', label: Grades.simpleSchema().label()['name']},
                { key: 'codeDirectDebit', label:Grades.simpleSchema().label()['desc']},
                { key: 'website',label:Grades.simpleSchema().label()['grade'] },
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'code'
        };
    }
});

Template.Grade_Index.events({
  'click .ListBanks tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/bank/' + post._id);
  },
  'click .new-Bank': function(){
      Session.set('NewBank',true);
  }
});

