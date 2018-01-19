import { Session } from 'meteor/session';

Template.QoutaMember.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('qoutasMember');
        self.subscribe('qoute');
        self.subscribe('accounts');
    });
    
});

Template.QoutaMember.helpers({
    // qoute: () => {
    //     var id = FlowRouter.getParam('id');
        
    //     return Qoutas.findOne({_id: id});
    // }
});