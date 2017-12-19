
import { SSR, Template } from 'meteor/meteorhacks:ssr';
import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
//import { renderRoutes } from '../imports/startup/client/routes.js';

// this is an expensive polyfill for clientside Buffer usage
// but we recommend you refactor to remove this dependency
global.Buffer = global.Buffer || require("buffer").Buffer; // eslint-disable-line

Meteor.startup(() => {
  
  console.log(Meteor.settings);

  // this is an expensive polyfill for clientside Buffer usage
  // but we recommend you refactor to remove this dependency
  //global.Buffer = global.Buffer || require("buffer").Buffer; // eslint-disable-line

  if(!Meteor.users.find().count()) {
    var options = {
      username: Meteor.settings.private.Agnus.username, 
      password: Meteor.settings.private.Agnus.password, 
      email: Meteor.settings.private.Agnus.email
    };
    Accounts.createUser(options);
  }

  //Meteor.call('geraReferencia','BIM','0001', '0002', '1577');
  
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { "service": "facebook" },
    {
      $set: {
        "appId": "1527268020642572",
        "secret": "483bf4e113bfee483b34a6493e9939f3"
      }
    },
    { upsert: true }
  );

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { "service": "facebook" },
    {
      $set: {
        "appId": "XXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );

});

// Deny all client-side updates to user documents
Meteor.users.deny({
  update() { return true; }
});

