import { Accounts } from 'meteor/accounts-base';
import { Meteor } from "meteor/meteor";
import { check } from 'meteor/check';

Meteor.methods({
    toggleVerification: function(id, verificationState){
        check(id, String);
        Meteor.users.update(id, {
            $set: {
                verification: !verificationState
            }
        });
    },
    deactivateUser: function(id, activeState){
        check(id, String);
        Meteor.users.update(id, {
            $set: {
                active: !activeState
            }
        });
    },
    updateUser: function(id){
        Meteor.users.update(id);
    },
    // deleteUser: function(id, imageId){
    //     Meteor.users.remove(id);
    //     UserImage.remove(imageId);
    //     FlowRouter.go('users');
    // },
    sendVerificationLink: function() {
    var userId = Meteor.userId();
        if ( userId ) {
            return Accounts.sendVerificationEmail(userId);
        }
    },
    createUserTeacher: function(options){

        check(options.password,String);
        check(options.email,String);
        check(options.username,String);

        Accounts.createUser({
            username: options.username,
                /* profile: {
                    firstname: firstnameVar,
                    lastname: lastnameVar,
                    personalPhone: phoneVar,
                    schoolId: schoolVar
                }, */
                email: options.email,
                password: options.password
        }, function(error){
            if(error){
                console.log( error.reason);
                //FlowRouter.go('register');
                Bert.alert( error.reason, 'danger');
                $('.register-button').removeClass('hidden');
            } else {
                //Roles.addUsersToRoles( Meteor.userId(), ['teacher'], Roles.GLOBAL_GROUP);
                //FlowRouter.go('home');
                console.log( 'Welcome. You are signed up as a new teacher');
                Bert.alert( 'Welcome. You are signed up as a new teacher', 'success');
                // Meteor.call( 'sendVerificationLink', ( error, response ) => {
                //     if ( error ) {
                //         Bert.alert( error.reason, 'danger' );
                //     }
                // });
            }
        });
    },
    createAdmin: function(schoolId){
        check(schoolId, String);

        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

        var schoolEmail = Schools.findOne({_id: schoolId}).email;
        var schoolPhone = Schools.findOne({_id: schoolId}).phoneNumber;
        var users = [
            { username: rString, firstname: 'superadmin', email: schoolEmail, password: 'admin123', roles: ['admin'] }
        ];
        console.log(users);
        // user creation
        _.each(users, function(d) {
            // return id for use in roles assignment below

            Accounts.createUser({
                username: d.username,
                profile: {
                    firstname: d.firstname,
                    personalPhone: schoolPhone,
                    schoolId: schoolId
                },
                email: d.email,
                password: d.password,
                active: true
            });
            
            console.log(Meteor.users.findOne({ username: d.username}));
            var userId = Meteor.users.findOne({ username: d.username})._id;
            // verify user email
            //Meteor.users.update({ _id: userId }, { $set: { 'emails.0.verified': true } });

            // add roles to user
            Roles.addUsersToRoles( userId, ['admin'], Roles.GLOBAL_GROUP);
            console.log("done");
        });
    }
});
