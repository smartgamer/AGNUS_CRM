import Images from '/lib/api/assets/methods.js';

Template.Product.onCreated(function(){
    var self = this;

});

Template.Product.events({
    'click .toggle-menu':function(){
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    }
});

Template.Product.helpers({
    image:function(){
        
        var idPicture = this.picture;

        var picture = Images.findOne({
            _id: idPicture
        });
        
        console.log(picture);
        
        return picture;
    }

});

