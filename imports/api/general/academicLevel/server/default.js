if(AcademicLevel.find().count()===0){
    var data = JSON.parse(Assets.getText("data/academicLevel.json"));

    data.forEach(function (item) {
        AcademicLevel.insert(item);
    });
}