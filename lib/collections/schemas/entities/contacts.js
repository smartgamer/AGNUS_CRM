import SimpleSchema from 'simpl-schema';

Schema.Contact = new SimpleSchema({
    code:{
        type:String,
        label:"Codigo",
        unique:true
    },
    city:{
        type:String,
        optional:true,
        label:"Cidade"
    },
    address: {
        type: String,
        label: "Morada"
    },
    zone:{
        type: String,
        label:"Zona",
    },
    district:{
        type: String,
        label:"Districto"
    },

    mobile: {
        type: String,
        label: "Celular",
        max: 20,
        optional:true
    },
    telphone: {
        type: String,
        label: "Telefone",
        max: 20
    },
    otherContact: {
        type: String,
        label: "Outros Contactos",
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
        label: "Outro",
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

