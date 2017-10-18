Template.registerHelper( 'dateTime', ( timestamp ) => {
    if ( timestamp ) {
      let momentToFormat = moment( timestamp ),
          date           = momentToFormat.format( 'MMMM Do, YYYY' ),
          time           = momentToFormat.format( 'hh:mm a' );
  
      return '${ date } at ${ time }';
    }
  });

  Template.onRendered(function () {
    // Initialize all datepicker inputs whenever any template is rendered
    
    this.$('.datepicker').datepicker();
    this.$('.datetimepicker').datetimepicker();
    // Initialize collapse button
    this.$(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
  });