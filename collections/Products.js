import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Products = new Mongo.Collection('products');

Products.allow({
 insert: function(userId, doc){
  return !!userId;
 },
 update: function(userId, doc){
  return !!userId;
 }
});

ProductShema = new SimpleSchema({
    product: {
        type: String,
        label: "Product",
        max: 20
    },
    desc:{
        type: String,
        label: "Description",
        max:50
    },
    family:{
        type: String,
        label: "Family",
        optional: true,
        max:1000
    },
    price:{
        type: Number,
        label: "Price"
    },
    summary:{
        type: String,
        label: "Brief summary",
        optional: true,
        max:1000
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

Products.attachSchema(ProductShema);