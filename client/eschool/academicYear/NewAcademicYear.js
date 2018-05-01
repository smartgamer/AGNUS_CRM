Template.NewAcademicYear.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('academic_Year');
    });
});

Template.NewAcademicYear.events({
    'click .academicYear-close': function(){
        Session.set('NewAcademicYear',false);
    }
})
