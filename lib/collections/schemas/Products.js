import SimpleSchema from 'simpl-schema';
import { Metafield }  from './metafield';
import { Event } from "./event";
import { Workflow } from "./workflow";

SimpleSchema.extendOptions(['autoform']);

Products = new Mongo.Collection('products');

Products.allow({
insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    },
    remove: function () {
        return true;
    }
});

Schema = {};

Schema.SerialNumber = new SimpleSchema({
    
    serialNumber:{
        type: String,
        label: "Serial Number"
    }
});


/**
 * ProductVariant Schema
 * Ideia base From ReactionEcomerce.Js
 */
ProductVariant = new Mongo.Collection('productVariant');

export const ProductVariantSchema = new SimpleSchema({
    _id: {
      type: String,
      label: "Variant ID"
    },
    ancestors: {
      type: Array,
      //defaultValue: []
    },
    "ancestors.$": {
        type: String
    },
    // since implementing of flattened model this property is used for keeping
    // array index. This is needed for moving variants through list (drag'n'drop)
    index: {
      label: "Variant position number in list",
      type: Number,
      optional: true
    },
    isVisible: {
      type: Boolean,
      index: 1,
      defaultValue: false
    },
    isDeleted: {
      type: Boolean,
      index: 1,
      defaultValue: false
    },
    barcode: {
      label: "Barcode",
      type: String,
      optional: true,
      custom: function () {
        if (Meteor.isClient) {
          if (this.siblingField("type").value === "inventory" && !this.value) {
            return "required";
          }
        }
      }
    },
    compareAtPrice: {
      label: "Compare At Price",
      type: Number,
      optional: true,
      //decimal: true,
      min: 0,
      defaultValue: 0
    },
    fulfillmentService: {
      label: "Fulfillment service",
      type: String,
      optional: true
    },
    weight: {
      label: "Weight",
      type: Number,
      min: 0,
      optional: true,
      //decimal: true,
      defaultValue: 0,
      custom: function () {
        if (Meteor.isClient) {
          if (!(this.siblingField("type").value === "inventory" || this.value ||
            this.value === 0)) {
            return "required";
          }
        }
      }
    },
    length: {
      label: "Length",
      type: Number,
      min: 0,
      optional: true,
      //decimal: true,
      defaultValue: 0
    },
    width: {
      label: "Width",
      type: Number,
      min: 0,
      optional: true,
      //decimal: true,
      defaultValue: 0
    },
    height: {
      label: "Height",
      type: Number,
      min: 0,
      optional: true,
      //decimal: true,
      defaultValue: 0
    },
    inventoryManagement: {
      type: Boolean,
      label: "Inventory Tracking",
      optional: true,
      defaultValue: true,
      custom: function () {
        if (Meteor.isClient) {
          if (!(this.siblingField("type").value === "inventory" || this.value ||
            this.value === false)) {
            return "required";
          }
        }
      }
    },
    // this represents an ability to sell item without keeping it on stock. In
    // other words if it is disabled, then you can sell item even if it is not in
    // stock.
    inventoryPolicy: {
      type: Boolean,
      label: "Deny when out of stock",
      optional: true,
      defaultValue: false,
      custom: function () {
        if (Meteor.isClient) {
          if (!(this.siblingField("type").value === "inventory" || this.value ||
            this.value === false)) {
            return "required";
          }
        }
      }
    },
    lowInventoryWarningThreshold: {
      type: Number,
      label: "Warn at",
      min: 0,
      optional: true,
      defaultValue: 0
    },
    inventoryQuantity: {
      type: Number,
      label: "Quantity",
      optional: true,
      defaultValue: 0,
      custom: function () {
        if (Meteor.isClient) {
          if (this.siblingField("type").value !== "inventory") {
            if (ReactionProduct.checkChildVariants(this.docId) === 0 && !this.value) {
              return "required";
            }
          }
        }
      }
    },
    minOrderQuantity: {
      label: "Minimum order quantity",
      type: Number,
      optional: true
    },
    // Denormalized field: Indicates when at least one of variants
    // `inventoryQuantity` are lower then their `lowInventoryWarningThreshold`.
    // This is some kind of marketing course.
    isLowQuantity: {
      label: "Indicates that the product quantity is too low",
      type: Boolean,
      optional: true
    },
    // Denormalized field: Indicates when all variants `inventoryQuantity` is zero
    isSoldOut: {
      label: "Indicates when the product quantity is zero",
      type: Boolean,
      optional: true
    },
    price: {
      label: "Price",
      type: Number,
      //decimal: true,
      defaultValue: 0.00,
      min: 0,
      optional: true
    },
/*     shopId: {
      type: String,
      autoValue: shopIdAutoValue,
      index: 1,
      label: "Variant ShopId"
    }, */
    sku: {
      label: "SKU",
      type: String,
      optional: true
    },
    type: {
      label: "Type",
      type: String,
      defaultValue: "variant"
    },
    taxable: {
      label: "Taxable",
      type: Boolean,
      defaultValue: true,
      optional: true
    },
    taxCode: {
      label: "Tax Code",
      type: String,
      defaultValue: "0000",
      optional: true
    },
    taxDescription: {
      type: String,
      optional: true,
      label: "Tax Description"
    },
    // Label for customers
    title: {
      label: "Label",
      type: String,
      defaultValue: ""
    },
    // Option internal name
    optionTitle: {
      label: "Option",
      type: String,
      optional: true,
      defaultValue: "Untitled Option"
    },
    createdAt: {
      label: "Created at",
      type: Date,
      optional: true
    },
    updatedAt: {
      label: "Updated at",
      type: Date,
      optional: true
    },
    // TODO: REVIEW - Does this need to exist? Should we use workflow instead?
    // Should it be called 'history' or something else instead?
    // Should this go into the Logger instead? Is the logger robust enough for this?
    eventLog: {
      label: "Variant Event Log",
      type: Array,
      optional: true
    },
    /* "eventLog.$": {
        type: Event
    },
    
    workflow: {
        type: Workflow,
        optional: true
    },
    productId:{
        type: String,
        optional: false
    },
    metafields: {
      type: Array,
      optional: true
    },
    "metafields.$": {
        type: Metafield
    }, */
/*     originCountry: {
      type: String,
      optional: true,
      autoValue: shopDefaultCountry
    } */
  });
  
  ProductVariant.attachSchema(ProductVariantSchema);

//registerSchema("ProductVariant", ProductVariant);

Schema.ProductPriceVariant = new SimpleSchema({
    price1: {
      type: Number,
      label: "PVP 1",

    },
    price2: {
      type: Number,
      label: "PVP 2",

    },
    price3: {
      type: Number,
      label: "PVP 3",
    },
    price4: {
      type: Number,
      label: "PVP 4",

    },
    price5: {
      type: Number,
      label: "PVP 5",

    },
    price6: {
      type: Number,
      label: "PVP 6",

    },
})

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
        max:20,
        autoform: {
          type: "select",
          options: function () {
              return Familys.find({}, {
                  sort: {
                    family: 1
                  }
                }).map(function (c)  {
                  return {label: c.family , value: c._id};
              });
          }
      }
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
    },
    haveSerial:{
        type:Boolean,
        label:"Have Serial's?"
    },
    serialNumbers:{
        type: Array,
        label: "Serial Nr.",
        optional: true
    },
    "serialNumbers.$":{
        type: Schema.SerialNumber

    },
    productPriceVariant:{
      type: Schema.ProductPriceVariant,
      optional:false
    }
}, { tracker: Tracker });

Products.attachSchema(ProductShema);