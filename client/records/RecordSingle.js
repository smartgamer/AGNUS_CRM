import { Session } from 'meteor/session'

Template.RecordSingle.onCreated(function(){
    var self = this;
    
    
    self.autorun(function(){
        self.subscribe('records');
    });
    
});

Template.RecordSingle.helpers({
    record: () => {
        var id = FlowRouter.getParam('id');
        return Records.findOne({_id: id});
    }
});

Template.RecordSingle.events({
    'click .fa-trash':function(){
        var id = FlowRouter.getParam('id');
        Meteor.call('deleteRecord',id);

        currentAuthor = Session.get('currentAccount')
        FlowRouter.go('/Account_Records/' + currentAuthor);
    },
    'click .list-Appoiments':function(){
        FlowRouter.go('/Appoiments/' + this._id);
    }
})
