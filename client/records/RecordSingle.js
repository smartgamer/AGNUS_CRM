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
        Session.set("currentAccount", id);
        return Accounts.findOne({_id: id});
    }
});