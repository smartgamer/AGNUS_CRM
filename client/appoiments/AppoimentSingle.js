Template.AppoimentSingle.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('appoiments');
    });
});

Template.AppoimentSingle.helpers({
    appoiment: () => {
        var id = FlowRouter.getParam('id');
        return Appoiments.findOne({_id: id});
    }
});