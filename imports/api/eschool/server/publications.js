ReactiveTable.publish("Academic_YearList",
    function () {
            return Academic_Year;
    }
);

Meteor.publish('academic_Year',function(){
    return Academic_Year.find({});
});

ReactiveTable.publish("GradesList",
    function () {
            return Grades;
    }
);

Meteor.publish('grade',function(){
    return Grades.find({});
});

ReactiveTable.publish("ClassesList",
    function () {
            return Classes;
    }
);

Meteor.publish('classes',function(){
    return Classes.find({});
});