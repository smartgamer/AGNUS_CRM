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



Meteor.publish('students', function(){
	return Students.find();
});
Meteor.publish( 'studentSearch', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );
  let query = {},
      projection = { limit: 1000, sort: { firstName: 1 } };
  if ( search ) {
    let regex = new RegExp( search, 'i' );
    query = {
      $or: [
        { firstName: regex },
		{ surname: regex },
		{ registrationNumber: regex },
		{ yearOfAdmission: regex },
		{ class: regex },
        { _id: regex }
      ]
    };
    projection.limit = 100;
  }
  return Students.find( query, projection );
});
Meteor.publish('studentImages', function(){
	return StudentImages.find();
});
Meteor.publish('singleStudent', function(id){
  check(id, String);
  return Students.find({_id: id});
});
Meteor.publish('singleStudentImage', function(id){
  check(id, String);
  return StudentImages.find({_id: id});
});





//SCHOOL
Meteor.publish( 'schoolSearch', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );
  let query = {},
      projection = { limit: 1000, sort: { name: 1 } };
  if ( search ) {
    let regex = new RegExp( search, 'i' );
    query = {
      $or: [
        { name: regex },
		{ schoolNumber: regex },
        { _id: regex }
      ]
    };
    projection.limit = 100;
  }
  return Schools.find( query, projection );
});

Meteor.publish('schoolsList', function(){
	return Schools.find();
});

Meteor.publish('schoolImages', function(){
  return SchoolImages.find();
});
Meteor.publish('singleSchool', function(id){
  check(id, String);
  return Schools.find({_id: id});
});


Meteor.publish('classes', function(){
	return Classes.find({}, {sort: {Form: 1}});
});
Meteor.publish( 'classSearch', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );
  let query = {},
      projection = { limit: 1000, sort: { Form: 1 } };
  if ( search ) {
    let regex = new RegExp( search, 'i' );
    query = {
      $or: [
        { streamName: regex },
		{ Form: regex },
        { _id: regex }
      ]
    };
    projection.limit = 100;
  }
  return Classes.find( query, projection );
});
Meteor.publish('singleClass', function(id){
  check(id, String);
  return Classes.find({_id: id});
});

//Disciplinas
Meteor.publish('subjects', function(){
	return Subjects.find();
});
Meteor.publish( 'subjectSearch', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );
  let query = {},
      projection = { limit: 1000, sort: { order: 1 } };
  if ( search ) {
    let regex = new RegExp( search, 'i' );
    query = {
      $or: [
        { name: regex },
        { _id: regex }
      ]
    };
    projection.limit = 100;
  }
  return Subjects.find( query, projection );
});
Meteor.publish('singleSubject', function(id){
  check(id, String);
  return Subjects.find({_id: id});
});