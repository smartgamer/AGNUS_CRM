import SimpleSchema from 'simpl-schema';
import { Stream } from 'stream';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Schema.AccountMembership = new SimpleSchema({
    since: {
        type: Date,
        label: "Since",
    },
    cardNumber: {
        type: String,
        label: "Card Number",
        optional: true
    },

    issueDate: {
        type: Date,
        label: "Issue Date",
        optional: true
    },
    issueLocal: {
        type: String,
        label: "Issue Local",
        optional: true
    },
    quote: {
        type: String,
        label: "Quote",
        allowedValues: ['Partial', 'Regular', 'Irregular'],
        autoform: {

            options: [
                { label: "Partial", value: 'Partial' },
                { label: "Regular", value: 'Regular' },
                { label: "Irregular", value: 'Irregular' },
            ]
        },
        defaultValue: "Regular"
    },
    cell: {
        type: String,
        label: "cell"
    },
    circle: {
        type: String,
        label: "Circle",
        optional: true
    },
    status: {
        type: String,
        label: "Status",
        defaultValue: 'Militante',
        allowedValues: ['Militante', 'Não militante', 'Falecido', 'Suspenso', 'Desertor', 'Mudança de filiação'],
        autoform: {

            options: [
                { label: 'Militante', value: 'Militante' },
                { label: 'Não militante', value: 'Não militante' },
                { label: 'Falecido', value: 'Falecido' },
                { label: 'Suspenso', value: 'Suspenso' },
                { label: 'Desertor', value: 'Desertor' },
                { label: 'Mudança de filiação', value: 'Mudança de filiação' },
            ]
        },
        optional:true
    },
    role: {
        type: String,
        label: "Role",
        optional: true
    },
    socialOrganization: {
        type: String,
        label: "Social Organization",
        allowedValues: ['ACLIN', 'OMM', 'OJM'],
        optional:true,
        autoform: {

            options: [
                { label: "ACLIN", value: 'ACLIN' },
                { label: "OMM", value: 'OMM' },
                { label: "OJM", value: 'OJM' }
            ]
        }
    },
    organOrganization: {
        type: String,
        label: "Órgão no Partido",
        optional:true,
        allowedValues: ['Comissão Política', 'Comité Central', 'Comité Provincial',
            'Comité Distrital', 'Comité de Zona', 'Comité de Círculo'],

        autoform: {

            options: [
                { label: "Comissão Política", value: 'Comissão Política' },
                { label: "Comité Central", value: 'Comité Central' },
                { label: "Comité Provincial", value: 'Comité Provincial' },

                { label: "Comité Distrital", value: 'Comité Distrital' },
                { label: "Comité de Zona", value: 'Comité de Zona' },
                { label: "Comité de Círculo", value: 'Comité de Círculo' },
            ]
        }
    },
    functionOrganization: {
        type: String,
        label: "Função no Partido",
        optional:true,
        allowedValues: ['Presidente', 'Secretario Geral', '1º Secretario Provincial',
            'Comité Distrital', 'Comité de Zona', 'Comité de Círculo'],

        autoform: {

            options: [
                { label: "Presidente", value: 'Presidente' },
                { label: "Secretario Geral", value: 'Secretario Geral' },
                { label: "1º Secretario Provincial", value: '1º Secretario Provincial' },

                { label: "1º Secretario Distrital", value: '1º Secretario Distrital' },
                { label: "Membro do Secretariado", value: 'Membro do Secretariado' }
            ]
        }
    }
}, { tracker: Tracker });

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

Schema.ComercialData = new SimpleSchema({
    credit: {
        type: Number,
        label: "Crédito",
        //default:0,
        optional: true
    },
    limitCredit: {
        type: Number,
        label: "Limite Crédito",
        min: 0,
        max: 100,
        optional: true
    },
    type: {
        type: String,
        label: "Tipo Cliente",
        optional: true
    },
    Recebimento: {
        type: String,
        label: "Recebimento",
        optional: true
    },
    Vendedor: {
        type: String,
        label: "Vendedor",
        optional: true
    },
    Notes: {
        type: String,
        label: "Observações",
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 4,
                class: "materialize-textarea"
            }
        }
    },
    Desconto: {
        type: String,
        label: "Desconto Comercial",
    },
    RegimeIva: {
        type: String,
        label: "Regime Espercial de IVA",
        max: 10,
        optional: true
    },
    RetencoesnaFonte: {
        type: String,
        label: "Retençoes na Fonte",
        max: 10,
        optional: true
    }
}, { tracker: Tracker });

Schema.AccountRelationship = new SimpleSchema({
    type: {
        type: String,
        allowedValues: ['Father', 'Mother', 'Other', 'Child'],
        autoform: {

            options: [
                { label: "Father", value: 'Father' },
                { label: "Mother", value: 'Mother' },
                { label: "Other", value: 'Other' },
                { label: "Child", value: "Child" }
            ]
        }
    },
    other: {
        type: String,
        optional: true,
        max: "10"
    },
    account_id: {
        type: String,
        autoform: {
            type: "select",
            options: function () {
                return Accounts.find({}, {
                    sort: {
                        name: 1
                    }
                }).map(function (c) {
                    return { label: c.name, value: c._id };
                });
            }
        }
    }
}, { tracker: Tracker });

Schema.AccountType = new SimpleSchema({
    type: {
        type: String,
        label: "Type",
        max: 10,
        allowedValues: ['Teacher', 'Studant', 'Client', 'Supplier'],
        autoform: {

            options: [
                { label: "Teacher", value: 'Teacher' },
                { label: "Studant", value: 'Studant' },
                { label: "Client", value: 'Client' },
                { label: "Supplier", value: 'Supplier' },
            ]
        }
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

Schema.AccountProfessionalInfo = new SimpleSchema({
    company: {
        type: String,
        label: "Company",
    },
    sallary:{
        type: String,
        label: "Sallary"
    },
    current:{
        type: Boolean,
        label: "Current?",
        defaultValue: true
    },
    since:{
        type: Number,
        label: "Since",
        optional:true
    },
    to:{ 
        type: Number,
        label: "End",
        optional: true
    },
    obs:{
        type: String,
        label:"Obs.",
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

export const AccountSchema = new SimpleSchema({
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
    firstName: {
        type: String,
        label: "FirstName",
        max: 50
    },
    surname: {
        type: String,
        label: "Surname",
        max: 50
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
    gender: {
        type: String,
        label: "Gender",
        allowedValues: ['Male', 'Female'],
        autoform: {

            options: [
                { label: "Male", value: 'Male' },
                { label: "Female", value: 'Female' }
            ]
        },
        defaultValue: "Male"
    },
    age: {
        type: Number,
        label: "Age"
    },
    birthDate: {
        type: Date,
        label: "Birth Date"
    },
    contact:{
        type: Schema.AccountContact,
        label:"Contact"
    },
    academicLevel: {
        type: String,
        label: "Academic Level",
        max: 50,
        optional: true
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
    relationships: {
        type: Array,
        label: "Relationships",
        optional: true
    },
    "relationships.$": {
        type: Schema.AccountRelationship

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
    type: {
        type: Array,
        label: "Type",
        optional: true
    },
    "type.$": {
        type: Schema.AccountType
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
    },
    membership: {
        type: Array,
        label: "MemberShip",
        optional: true
    },
    "membership.$": {
        type: Schema.AccountMembership
    },
    professionalInfo:{
        type: Schema.AccountProfessionalInfo,
        optional: true
    }
}, { tracker: Tracker });

Accounts = new Mongo.Collection('accounts');

Accounts.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Accounts.attachSchema(AccountSchema);
