import { Factory } from "meteor/dburles:factory";
//import banks  from './../client/banks.json';
//import { console } from "meteor/tools";

if (Banks.find().count() === 0) {
    
    //const data = Assets.getText('banks.json');
    var data = JSON.parse(Assets.getText("data/banks.json"));
    //var data = HTTP.get(Meteor.absoluteUrl("api/banks/banks.json"))
    // Meteor.absoluteUrl("api/banks/banks.json"));

    data.forEach(function (bank) {
       console.log(bank);
       Banks.insert(bank);
    });
}