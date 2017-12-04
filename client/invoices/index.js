Template.invoicesList.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('invoices');
        self.subscribe("qoutas");
        self.subscribe("accounts");
    });
});

Template.invoicesList.helpers({ 
    invoices: () => {
        return Invoices.find({});
    },

    settings: function () {
        return {
            collection: 'invoicesListTable',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [

                { key: '_id', label: 'Id', hidden: true },
                {
                    key: 'date', label: 'Data'
                    , fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY'); }
                },
                { key: 'qoute', label: 'qoute',
                    fn: function (value, object, key) { return Qoutas.findOne({ _id: value}).desc; }
                },
                { key: 'entity', label: 'Entity' ,
                    fn: function (value, object, key) { return Accounts.findOne({ _id: value}).code; }
                },
                { key: 'entity', label: 'Name' ,
                    fn: function (value, object, key) { return Accounts.findOne({ _id: value}).name; }
                },
                { key: 'document', label: 'Document' },
                { key: 'number', label: 'Number' },
                { key: 'serie', label: 'Serie' },
                
                { key: 'type', label: 'Type' },
                
                { key: 'totalAmount', label: 'Total Amount'},
                { key: 'status', label: 'status' }
            ],
            useFontAwesome: true,
            rowClass: '',
            group: 'entity'
        };
    }
}); 

Template.invoicesList.events({
    'click .ListInvoices tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        FlowRouter.setParams({id: post._id});
        FlowRouter.go('/invoice/' + post._id);
    },
    'click .new-Invoice': function(){
        Session.set('NewInvoice',true);
    }
});