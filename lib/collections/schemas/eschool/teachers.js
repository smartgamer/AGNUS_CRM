import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Teachers = new Mongo.Collection('teachers');

export const TeacherSchema = new SimpleSchema({
    code:{
        type:Number,
        label:"Code",
        unique: true
    },
    status:{
        type: String,
        label: "Status",
        defaultValue:"Active",
        allowedValues: ['Active','Contact','Expired',''],
        autoform: {
            
            options: [
              {label: "Open", value: 'Open'},
              {label: "Closed", value: 'Closed'}
            ]
        }

    },
    account_id:{
        type: String,
        label:"Account",
        type: String,
        autoform: {
            type: "select",
            options: function () {
                return Accounts.find({}, {
                    sort: {
                        name: 1
                    }
                  }).map(function (c)  {
                    return {label: c.name , value: c._id};
                });
            }
        }
    }
}, { tracker: Tracker });

Teachers.attachSchema(TeacherSchema);


