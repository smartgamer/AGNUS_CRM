Template.Records.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('records');
    });
});

Template.Records.helpers({
    accountsRecords: () => {
        return Records.find({});
    },

    settings: function () {
        
        return {
            collection: 'accountsRecordsList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'desc', label: 'desc' },
                { key: 'account', label:'Account'}  
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'records'
        };
    }
});

Template.Records.events({
    'click .newAccount':function(){
        FlowRouter.go('record_New');
    }
});

Template.Records.events({
  'click .ListAccountsRecords tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/record/' + post._id);
  }
});

