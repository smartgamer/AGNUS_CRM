import { Session } from 'meteor/session'

Template.qouteSingle.onCreated(function(){
    var self = this;
    
    
    self.autorun(function(){
        self.subscribe('qoutas');
    });
    
});

Template.qouteSingle.helpers({
    qoute: () => {
        var id = FlowRouter.getParam('id');
        
        return Qoutas.findOne({_id: id});
    }
});

Template.qouteSingle.events({
    'click .list-Invoices':function(){
        var id = FlowRouter.getParam('id');
        FlowRouter.go('/Qoutas_Invoice/' + id);
    },
    'click .delete':function(){
        var id = FlowRouter.getParam('id');
        Meteor.call('deleteQoute',id);

        FlowRouter.go('/Qoutas');
    }
})