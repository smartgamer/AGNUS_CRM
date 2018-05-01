Template.Eschool_Index.onCreated(function(){
    
});

Template.Eschool_Index.helpers({
    settings: function () {
        return {
            collection: 'Academic_YearList',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [

                { key: '_id', label: 'Id', hidden: true },
                { key: 'code', label: Academic_Year.simpleSchema().label()['code'] },
                { key: 'desc', label: Academic_Year.simpleSchema().label()['desc'] },
                
                {
                    key: 'begin', label: Academic_Year.simpleSchema().label()['begin'] 
                    , fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY'); }
                },
                {
                    key: 'end', label: Academic_Year.simpleSchema().label()['end'] 
                    , fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY'); }
                },
                { key: 'status', label: Academic_Year.simpleSchema().label()['status']  }
            ],
            useFontAwesome: true,
            rowClass: '',
            group: 'begin'
        };
    }
});

Template.Eschool_Index.events({
    'click .ListInvoices tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        FlowRouter.setParams({id: post._id});
        FlowRouter.go('/AcademicYear/' + post._id);
    },
    'click .new-AcademicYear': function(){
        Session.set('NewAcademicYear',true);
    }
});
