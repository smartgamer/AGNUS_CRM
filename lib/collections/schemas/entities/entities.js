import SimpleSchema from 'simpl-schema';
import { Stream } from 'stream';

export const EntitiesSchema = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        unique: true,
        autoValue: function(){
 
        }
    },
    name: {
        type: String,
        label: "Nome Completo",
        max: 50
    },
    desc: {
        type: String,
        label: "Outros Dados",
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 4,
                class: "materialize-textarea"
            }
        }
    },
    contact:{
        type: Array,
        label:"Contactos",
        optional:true
    },
    /*"contact.$":{
        type: Schema.Contact,
        label:"Contactos"
    },*/
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
        label:"Foto",
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
        label: "Estado",
        defaultValue: "Active",
        allowedValues: ['Active', 'Contact', 'Expired', ''],
        autoform: {

            options: [
                { label: "Activo", value: 'Active' },
                { label: "Cancelado", value: 'Contact' },
                { label: "Expired", value: 'Expirado' },
            ]
        }
    }
}, { tracker: Tracker }); 