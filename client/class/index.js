Template.classList.onCreated(function(){
    var self = this;

});

Template.classList.helpers({
    classes: () => {
        return Classes.find({});
    },

    settings: function () {
        return {
            collection: 'ClassList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'code', label: Grades.simpleSchema().label()['code']},
                { key: 'desc', label: Grades.simpleSchema().label()['desc']},
                { key: 'limit', label:Grades.simpleSchema().label()['limit']},
                { key: 'grade',label:Grades.simpleSchema().label()['grade'] },
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'code'
        };
    }
});

Template.classList.events({
  'click .ListGrades tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/grade/' + post._id);
  },
  'click .new-Grade': function(){
      Session.set('NewGrade',true);
  }
});

