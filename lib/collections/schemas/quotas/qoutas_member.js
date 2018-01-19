import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.QoutaMemberSchema = new SimpleSchema({
    Qouta: {
        type: String,
        label: "Banco",
        autoform: {
            type: "select",
            options: function () {
                return Qoutas.find({}, {
                    sort: {
                        desc: 1
                    }
                }).map(function (c) {
                    return { label: c.desc, value: c._id };
                });
            }
        }
    },
    Member:{
        type:String,
        label:"Membro",
        autoform: {
            type: "select",
            options: function () {
                return Accounts.find({"type.0.type":{"$eq":"Member"} }, {
                    sort: {
                        name: 1
                    }
                }).map(function (c) {
                    return { label: c.name, value: c._id };
                });
            }
        }
    },
    Value:{
        type: Number,
        label:"Valor"
    },

}, { tracker: Tracker });

QoutasMember = new Mongo.Collection('qoutasMember');

QoutasMember.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

QoutasMember.attachSchema(Schema.QoutaMemberSchema);
