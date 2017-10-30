Template.Customers.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('customers');
    });
});

Template.Customers.helpers({
    customers: () => {
        return Customers.find({});
    },

    settings: function () {
        return {
            collection: 'customersList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'code', label: 'Code' },
                { key: 'name', label: 'Name' },
                { key: 'telphone', label: 'Telphone' },
                { key: 'email', label: 'Email' },
                { key: 'productPriceVariant',label:'PVP'}
                
                
            ],
            useFontAwesome: true,
            rowClass:''
        };
    }
});

Template.Customers.events({
  'click .ListCustomers tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    console.log(post._id);
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/customer/' + post._id);
  },
  'click .new-Customer': function(){
      Session.set('NewCustomer',true);
  }
});

