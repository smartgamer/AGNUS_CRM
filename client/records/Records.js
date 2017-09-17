Template.Records.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('records');
    });
    
    currentAuthor = Session.get('currentAccount');

    this.filter = new ReactiveTable.Filter("myFilter");
    this.filter.set(currentAuthor);
});

Template.Records.helpers({

    accountsRecords: () => {
        return Records.find({});
    },

    settings: function () {
        currentAuthor = Session.get('currentAccount')  ; 
        return {
            collection: 'accountsRecordsList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id',hidden: true },
                { key:'createdAt',label:'Created At', 
                    fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY HH:mm'); }
                },
                { key:'openAt',label:'Open At', 
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
                { key: 'account', label:'Account', hidden:true}
            ],
            filters: ['myFilter'],
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

