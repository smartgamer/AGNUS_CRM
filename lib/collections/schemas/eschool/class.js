import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Classes = new Mongo.Collection('classes');

if ( Meteor.isServer ) {
    Classes._ensureIndex( { streamName: 1, Form: 1, _id: 1 } );
  }

  
export const ClassesSchema = new SimpleSchema({
    code:{
        type:String,
        label:"Codigo",
        unique: true
    },
    desc:{
        type:String,
        label:"Descrição",
        max:25
    },
    limit:{
        type:Number,
        label:"Limite Alunos"
    },
    grade: {
        type: String,
        label: "Classe",
        max: 10,
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                return Grades.find({}, {
                    sort: {
                        code: 1
                    }
                }).map(function (c) {
                    return { label: c.desc, value: c.code };
                });
            }
        }
    },
    active: {
        type: Boolean,
        defaultValue: true,
        optional: true,
        autoform: {
            type: "hidden"
        }
    }
}, { tracker: Tracker });

Classes.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Meteor.methods({
	deleteClass: function(id){
        var studentCheck = Students.find({class: id}).count();
        var examCheck = Exams.find({classes: {$eq: id}}).count();
        var timetableCheck = Timetables.find({class: id}).count();

        if (studentCheck > 0 || examCheck > 0 || timetableCheck > 0){
            Bert.alert("you cannot delete this class. Disable the class insted", "danger");
        } else {
            Classes.remove(id);
    		FlowRouter.go('classes');
        }
	},
    deactivateClass: function(id){
        check(id, String);
        var status = Classes.findOne({_id: id}).active;
        if(status == true){
            Classes.update(id, {
                $set: {
                    active: false
                }
            });
        } else {
            Classes.update(id, {
                $set: {
                    active: true
                }
            });
        }
    }
});

Classes.attachSchema(ClassesSchema);