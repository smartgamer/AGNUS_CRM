Template.registerHelper( 'dateTime', ( timestamp ) => {
    if ( timestamp ) {
      let momentToFormat = moment( timestamp ),
          date           = momentToFormat.format( 'MMMM Do, YYYY' ),
          time           = momentToFormat.format( 'hh:mm a' );
  
      return '${ date } at ${ time }';
    }
  });

  Template.onRendered(function () {

    //this.$("input[type='date']")

    this.$('.collapsible').collapsible({
      accordion: false// A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    this.$('.parallax').parallax();
    // Initialize collapse button
    

    this.$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
    // Initialize all datepicker inputs whenever any template is rendered
    
    //this.$('.datepicker').datepicker();
    //this.$('.datetimepicker').datetimepicker();
    
    
   
  });