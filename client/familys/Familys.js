Template.Familys.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('familys');
    });
});

Template.Familys.helpers({
    familys: () => {
        return Familys.find({});
    },

    settings: function () {
        return {
            collection: 'familysList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key: 'family', label: 'Name' },
                { key: 'desc', label: 'Description' },
                { key: 'summary', label: 'Summary' }
                
            ],
            useFontAwesome: true,
            rowClass:'',
            group: 'family'
        };
    }
});

Template.Familys.events({
    'click .ListFamilys tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        FlowRouter.setParams({id: post._id});
        FlowRouter.go('/family/' + post._id);
    },
    'click .new-Family': function(){
        Session.set('NewFamily',true);
    }
});

