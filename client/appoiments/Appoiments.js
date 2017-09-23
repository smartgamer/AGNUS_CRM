Template.Appoiments.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('appoiments');
    });
    
    currentAuthor = Session.get('currentAccount');

    this.filter = new ReactiveTable.Filter("myFilter");
    this.filter.set(currentAuthor);
});

Template.Appoiments.helpers({

    accountsRecords: () => {
        return Appoiments.find({});
    },

    settings: function () {
        currentAuthor = Session.get('currentAccount')  ; 
        return {
            collection: 'appoimentsList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key:'createdAt',label:'Created At', 
                    fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY HH:mm'); }
                },
                { key:'date',label:'Date', 
                    fn: function (value, object, key) { 
                        
                        if (moment(value).isValid()) {
                            return moment(value).format('DD-MM-YYYY HH:mm');
                        } else{
                            return;
                        }
                    }
                },
                { key:'summary', label:'Summary'},
                { key: 'desc', label: 'Description' },
                { key: 'type', label: 'Type' },
                { key: 'status',label: 'Status' },
                { key: 'account_id', label:'Account', hidden:true}
            ],
            filters: ['myFilter'],
            useFontAwesome: true,
            rowClass:'',
            group: 'records'
        };
    }

    
});

Template.Appoiments.events({
    'click .newAppoiment':function(){
        FlowRouter.go('appoiment_New');
    }
});

Template.Appoiments.events({
    'click .new-Appoiment': function(){
        Session.set('NewAppoiment',true);
    }
})

Template.Appoiments.events({
  'click .ListAppoiments tbody tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    FlowRouter.setParams({id: post._id});
    FlowRouter.go('/appoiment/' + post._id);
  }
});

