Template.NewGrade.onCreated(function(){
    var self = this;
});

Template.NewGrade.events({
    'click .grade-close': function(){
        Session.set('NewGrade',false);
    }
})

