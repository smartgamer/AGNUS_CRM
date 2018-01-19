Meteor.publish('academicLevel',function(){
    return AcademicLevel.find({});
});

ReactiveTable.publish("academicLevelList",
    function () {
            return AcademicLevel;
    }
);