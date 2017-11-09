Template.Product.onCreated(function(){
    var self = this;

    console.log(this);
});

Template.Product.events({
    'click .toggle-menu':function(){
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    }
});

Template.Product.helpers({
    rendered: function() {
        console.log(this);
    }
});

