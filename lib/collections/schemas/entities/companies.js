import SimpleSchema from 'simpl-schema';
import { Stream } from 'stream';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Schema.BankAccount = new SimpleSchema({
    number: {
        type: Number,
        label: "Nr. de Conta",
    },
    bank: {
        type: String,
        label: "Banco",
        autoform: {
            type: "select",
            options: function () {
                return Banks.find({}, {
                    sort: {
                        code: 1
                    }
                }).map(function (c) {
                    return { label: c.code, value: c._id };
                });
            }
        }
    },
    coin: {
        type: String,
        label: "Moeda",
        allowedValues: ['MT', 'USD', 'ZAR', 'EUR'],
        optional: true,
        autoform: {

            options: [
                { label: "MT", value: 'MT' },
                { label: "USD", value: 'USD' },
                { label: "ZAR", value: 'ZAR' },
                { label: "EUR", value: "EUR" }
            ]
        },
        defaultValue:"MT"
    },
    Nib: {
        type: String,
        label: "Nib",
        optional: true
    },
    autoDebit: {
        type: Boolean,
        label: "Débito Directo"
    }

}, { tracker: Tracker });

Schema.AccountContact = new SimpleSchema({
    city:{
        type:String,
        label:"City"
    },
    address: {
        type: String,
        label: "Address"
    },
    zone:{
        type: String,
        label:"Zone",
    },
    district:{
        type: String,
        label:"District"
    },

    contact: {
        type: String,
        label: "Contact Principal",
        max: 20
    },
    telphone: {
        type: String,
        label: "Telphone Principal",
        max: 20
    },
    otherContact: {
        type: String,
        label: "Other Contact",
        max: 20,
        optional: true
    },
    email: {
        type: String,
        label: "Email",
        optional: true,
        regEx: SimpleSchema.RegEx.Email
    },
    other:{
        type: String,
        label: "Other",
        optional:true,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 4,
                class: "materialize-textarea"
            }
        }
    }
}, { tracker: Tracker });

export const CompanySchema = new SimpleSchema({
    code: {
        type: Number,
        label: "Code",
        unique: true
    },
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    desc: {
        type: String,
        label: "Other Info",
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 4,
                class: "materialize-textarea"
            }
        }
    },
    open: {
        type: Date,
        label: "open"
    },
    contact:{
        type: Schema.AccountContact,
        label:"Contact"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    },
    picture: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                //uploadTemplate: 'uploadField', // <- Optional
                //previewTemplate: 'myFilePreview', // <- Optional
                insertConfig: { // <- Optional, .insert() method options, see: https://github.com/VeliovGroup/Meteor-Files/wiki/Insert-(Upload)
                    meta: {},
                    isBase64: false,
                    transport: 'ddp',
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true
                }
            }
        }
    },
    status: {
        type: String,
        label: "Status",
        defaultValue: "Active",
        allowedValues: ['Active', 'Contact', 'Expired', ''],
        autoform: {

            options: [
                { label: "Active", value: 'Active' },
                { label: "Contact", value: 'Contact' }
            ]
        }
    },
    haveBankAccount: {
        type: Boolean,
        label: "Tem Conta Bancaria?",
        optional:true
    },
    bankAccount: {
        type: Array,
        label: "Contas Bancarias",
        optional: true
    }, "bankAccount.$": {
        type: Schema.BankAccount
    }
}, { tracker: Tracker });

Companies = new Mongo.Collection('companies');

Companies.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Companies.attachSchema(CompanySchema);