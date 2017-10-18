Template.Products.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('products');
    });
});

Template.Products.helpers({
    products: () => {
        return Products.find({});
    },

    settings: function () {
        return {
            collection: 'productsList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'product', label: 'Name' },
                { key: 'desc', label: 'Description' },
                { key: 'summary', label: 'Summary' },
                {key:'family',label:'Family'}
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'products'
        };
    }
});

Template.Products.events({
    'click .newProduct':function(){
        FlowRouter.go('product_New');
    }
});

Template.Products.events({
    'click .ListProducts tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        FlowRouter.setParams({id: post._id});
        FlowRouter.go('/product/' + post._id);
    },
    'click .new-Product': function(){
        Session.set('NewProduct',true);
    }
});

