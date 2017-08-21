Meteor.publish('recipes',function(){
    return Recipes.find({author:this.userId});
});

Meteor.publish('products',function(){
    return Products.find({author:this.userId});
});