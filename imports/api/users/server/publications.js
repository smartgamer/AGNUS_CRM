Meteor.publish('userList', function () {
    return Meteor.users.find({});
});

Meteor.publish('Meteor.users.initials', function ({ userIds }) {
    // Validate the arguments to be what we expect
    new SimpleSchema({
        userIds: { type: [String] }
    }).validate({ userIds });
    // Select only the users that match the array of IDs passed in
    const selector = {
        _id: { $in: userIds }
    };
    // Only return one field, `initials`
    const options = {
        fields: { initials: 1 }
    };
    return Meteor.users.find(selector, options);
});