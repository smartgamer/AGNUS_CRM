//import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  smtp = {
    username: 'guimaraesmahota@gmail.com',   // eg: server@gentlenode.com
    password: '*****',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

});
