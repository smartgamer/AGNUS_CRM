import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Categories = new Mongo.Collection('categories');

export const CategoriesSchema = new SimpleSchema({
    code:{
        type:Number,
        label:"Code",
        unique: true
    },
    desc: {
        type: String,
        label: "Description",
        max: 1000,
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 4,
            class: "materialize-textarea"
          }
        }
    },
    summary:{
        type: String,
        label:"Summary",
        max: 500,
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 4,
            class: "materialize-textarea"
          }
        }
    },
    status:{
        type: String,
        label: "Status",
        defaultValue:"Active",
        allowedValues: ['Active','Inactive','Canceled',''],
        autoform: {
            
            options: [
              {label: "Active", value: 'Active'},
              {label: "Inactive", value: 'Inactive'},
              {label: "Canceled", value: 'Canceled'},
            ]
        }

    }
}, { tracker: Tracker });

Categories.attachSchema(CategoriesSchema);
