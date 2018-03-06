ReactiveTable.publish("Academic_YearList",
    function () {
            return Academic_Year;
    }
);

Meteor.publish('academic_Year',function(){
    return Academic_Year.find({});
});