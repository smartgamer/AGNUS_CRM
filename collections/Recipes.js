
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

const Ingredient = new SimpleSchema({
    name:{
        type:String
    },
    amount:{
        type:String
    }

});

Recipes.allow({
 insert: function(userId, doc){
  return !!userId;
 },
 update: function(userId, doc){
  return !!userId;
 }
});

RecipeSchema = new SimpleSchema({
 name: {
  type: String,
  label: "Name"
 },
 desc: {
  type: String,
  label: "Description"
 },
 ingredients: {
  type: Array,
 },
 'ingredients.$':{
  type: Ingredient
 },
inMenu:{
    type: Boolean,
    defaultValue: false,
    optional:true,
    autoform:{
        type: "hidden"
    }
},

 author: {
  type: String,
  label: "Author",
  autoValue: function(){
   return this.userId
  },
  autoform: {
    type: "hidden"
  }
 },
 createdAt: {
  type: Date,
  label: "Created At",
  autoValue: function(){
   return new Date()
  },
  autoform: {
    type: "hidden"
  }
 }
  
});

Meteor.methods({
    toggleMenuItem: function(id,currentState){
        Recipes.update(id,{
            $set: {
                inMenu: !currentState
            }
        });
    }
});

Recipes.attachSchema(RecipeSchema);