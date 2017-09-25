//import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
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
        "appId": "XXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
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

  // Add GitHub configuration entry
  ServiceConfiguration.configurations.update(
    { "service": "github" },
    {
      $set: {
        "clientId": "XXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );

});

// Deny all client-side updates to user documents
Meteor.users.deny({
  update() { return true; }
});
