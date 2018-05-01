Template.Grade_Index.onCreated(function(){
    var self = this;

});

Template.Grade_Index.helpers({
    grades: () => {
        return Grades.find({});
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
                { key: 'name', label: Grades.simpleSchema().label()['name']},
                { key: 'desc', label:Grades.simpleSchema().label()['desc']},
                { key: 'grade',label:Grades.simpleSchema().label()['grade'] },
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'code'
        };
    }
});

Template.Grade_Index.events({
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

