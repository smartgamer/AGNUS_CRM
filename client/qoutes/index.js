Template.qoutasList.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('qoutas');
    });
});

Template.qoutasList.helpers({
    qoutas: () => {
        return Qoutas.find({});
    },

    settings: function () {
        return {
            collection: 'qoutasListTable',
            rowsPerPage: 5,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                { key: '_id', label: 'Id', hidden: true },
                { key: 'code', label: 'Code' },
                { key: 'desc', label: 'Description' },
                { key: 'year', label: 'Year' },
                {
                    key: 'begin', label: 'Begin'
                    , fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY'); }
                },
                {
                    key: 'end', label: 'End', fn: function (value, object, key) { return moment(value).format('DD-MM-YYYY'); }
                },
                { key: 'frequency', label: 'Frequency', hidden: true },
                { key: 'type', label: 'Type' },
                { key: 'value', label: 'Value' },
            ],
            useFontAwesome: true,
            rowClass: '',
            group: 'year'
        };
    }
});

Template.qoutasList.events({
    'click .ListQoutas tbody tr': function (event) {
        // set the blog post we'll display details and news for
        var post = this;
        FlowRouter.setParams({ id: post._id });
        FlowRouter.go('/qoute/' + post._id);
    },
    'click .new-Qoute': function () {
        Session.set('NewQoute', true);
    }
});