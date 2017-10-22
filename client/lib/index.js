import { Meteor } from 'meteor/meteor';
import { datetimepicker } from 'meteor/drewy:datetimepicker';
import { datepicker2 } from 'meteor/deepwell:bootstrap-datepicker2';


myCreateFunc = function() {
        $('.datepicker').datepicker();
        $('.datetimepicker').datetimepicker();
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
            onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
          }
        );

    }
;

Meteor.startup(()=>{
    const renderStart = Date.now();
    const startupTime = renderStart - window.performance.timing.responseStart;
  
    console.log('Meteor.startup tool', startupTime,'ms');
  
    renderAsync().then(() => {
      const renderTime= Date.now() - renderStart;
      console.log('renderAsync took',renderTime,'ms');
      console.log('total time:',startupTime + renderTime,'ms');
    });
});



async function renderAsync(params) {
    //const React = await import('react');
    //const {render} = await import('react-dom')
  
    //render(
    //  <em>&rarr; Render by <strong>React</strong>!</em>,
    //    document.getElementById('footer')
    //);
    // const Blaze  = await import('meteor/blaze');

    // var id = document.getElementById("footer");
    // var footer = Blaze.With(
    //     function () {
    //         //var data = Blaze.getData();
    //         var html = "<div>foo value is Ola Mundo</div>"
    //         return html;
    //     },function () {
    //         return {
    //            foo: Session.get('foo')
    //        };
    //    },
        
    //);
    //Blaze.render(footer, id);
  }
  