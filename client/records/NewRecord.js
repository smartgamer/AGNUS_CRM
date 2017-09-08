Template.NewRecord.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('records');
    });
});