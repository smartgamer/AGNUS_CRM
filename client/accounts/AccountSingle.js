import { Session } from 'meteor/session'

Template.AccountSingle.onCreated(function(){
    var self = this;
    
    
    self.autorun(function(){
        self.subscribe('accounts');
    });
    
});

Template.AccountSingle.helpers({
    account: () => {
        var id = FlowRouter.getParam('id');
        Session.set("currentAccount", id);
        return Accounts.findOne({_id: id});
    }
});