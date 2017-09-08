Template.Accounts.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('accounts');
    });
});

Template.Accounts.helpers({
    accounts: () => {
        return Accounts.find({});
    },

    settings: function () {
        return {
            collection: 'accountsList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'code', label: 'Code' },
                { key: 'name', label: 'Name' },
                { key: 'telphone', label: 'Telphone' },
                { key: 'email', label: 'Email' }
                
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'accounts'
        };
    }
});

Template.Accounts.events({
    'click .newAccount':function(){
        FlowRouter.go('account_New');
    }
});

Template.Accounts.events({
  'click .ListAccounts tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    console.log(post._id);
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/account/' + post._id);
  }
});

