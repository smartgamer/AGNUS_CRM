
import { SSR, Template } from 'meteor/meteorhacks:ssr';
import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { render } from 'react-dom';
//import { renderRoutes } from '../imports/startup/client/routes.js';

// this is an expensive polyfill for clientside Buffer usage
// but we recommend you refactor to remove this dependency
global.Buffer = global.Buffer || require("buffer").Buffer; // eslint-disable-line

Meteor.startup(() => {
  
  // this is an expensive polyfill for clientside Buffer usage
  // but we recommend you refactor to remove this dependency
  global.Buffer = global.Buffer || require("buffer").Buffer; // eslint-disable-line

  if(!Meteor.users.find().count()) {
    var options = {
      username: 'guimaraesmahota@gmail.com', 
      password: 'Agnes270115!', 
      email: 'guimaraesmahota@gmail.com'
    };
    Accounts.createUser(options);
  }

  // code to run on server at startup
  smtp = {
    username: 'guimaraesmahota@gmail.com',   // eg: server@gentlenode.com
    password: 'Agnes27012015!',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

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

