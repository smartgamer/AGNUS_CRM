Template.Banks.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('banks');
    });

    var s = "000" + 123;
    console.log( s.substr(s.length-4));
    console.log(Meteor.call('pad',123,4));

    // const str = "10";
    // let a =str.padStart(5, '0');
                
    // console.log(a);

    // Client: Asynchronously send an email.
    //Meteor.call('colocaZeros','10','123');
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
                { key: 'code', label: 'Code' },
                { key: 'desc', label: 'Descrição' }
                
                
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

