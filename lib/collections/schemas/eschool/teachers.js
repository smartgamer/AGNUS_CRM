import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Teachers = new Mongo.Collection('teachers');

Teachers.allow({
	insert: function(userId, doc) {
		return true;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

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
              {label: "Active", value: 'Active'},
              {label: "Contact", value: 'Contact'}
            ]
        }

    },
    account_id:{
        type: String,
        label:"Account",
        type: String,
        optional:true,
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


