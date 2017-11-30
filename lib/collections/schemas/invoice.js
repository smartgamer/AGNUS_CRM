import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.InvoiceItem = new SimpleSchema({
    product: {
        type: String,
        label: "Product",
        autoform: {
          type: "select",
          options: function () {
              return Protucts.find({}, {
                  sort: {
                    desc: 1
                  }
                }).map(function (c)  {
                  return {label: c.desc , value: c._id};
              });
          }
      }
    },
    desc:{
        type: String,
        label: "Description",
        max:50
    },
    quantity:{
        type: Number,
        label:"Quantity",
        defaultValue: 1
    }
}, { tracker: Tracker });

Schema.InvoiceSchema = new SimpleSchema({
    entity:{
        type:String,
        label:"Entidade",
        autoform: {
            type: "select",
            options: function () {
                return Accounts.find({}, {
                    sort: {
                      desc: 1
                    }
                  }).map(function (c)  {
                    return {label: c.name , value: c._id};
                });
            }
        }
    },
    number :{
        type:Number,
        label: "Number",
    },
    serie : {
        type:Number,
        label: "Serie"
    },
    document:{
        type: string,
        label: "Document",
        max:20
    },
    type: {
        type: String,
        label: "Type",
        max: 10
    },
    date:{
        type: Date,
        label: "Invoice Date"
    },
    totalAmount:{
        type: Number,
        label:"Total Amount",
        min:0
    },
    item: {
        type: Array,
        optional:true
    },
    "item.$":{
        type:Schema.InvoiceItem
    }
}, { tracker: Tracker });

Products.attachSchema(ProductShema);