
import { SSR, Template } from 'meteor/meteorhacks:ssr';
import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { getSchemas } from '../imports/plugins/core/collections/lib/registerSchema.js';


import Vue from 'vue'
import ElementUI from 'element-ui'

// this is an expensive polyfill for clientside Buffer usage
// but we recommend you refactor to remove this dependency
global.Buffer = global.Buffer || require("buffer").Buffer; // eslint-disable-line

Meteor.startup(() => {
  // use tracker autorun to detect language changes
  // this only runs on initial page loaded
  // and when user.profile.lang updates
  Tracker.autorun(function () {
    console.log(Meteor.settings);
  });

  // if(!Meteor.users.find().count()) {
  //   var options = {
  //     username: Meteor.settings.private.Aguns.username, 
  //     password: Meteor.settings.private.Aguns.password, 
  //     email: Meteor.settings.private.Aguns.email
  //   };
  //   Accounts.createUser(options);
  // }

  // // code to run on server at startup
  // smtp = Meteor.settings.private.Aguns.SMTP;

  // process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

// Deny all client-side updates to user documents
Meteor.users.deny({
  update() { return true; }
});

