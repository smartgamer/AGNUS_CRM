Template.Banks.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('banks');
    });
});

Template.Banks.helpers({
    accounts: () => {
        return Accounts.find({});
    },

    settings: function () {
        return {
            collection: 'bankList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'code', label: Banks.simpleSchema().label()['code']},
                { key: 'desc', label: Banks.simpleSchema().label()['desc']},
                { key: 'codeDirectDebit', label:Banks.simpleSchema().label()['codeDirectDebit']},
                { key: 'website',label:Banks.simpleSchema().label()['website'] },
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'code'
        };
    }
});

Template.Banks.events({
  'click .ListBanks tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/bank/' + post._id);
  },
  'click .new-Bank': function(){
      Session.set('NewBank',true);
  }
});

