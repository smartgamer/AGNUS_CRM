import { datetimepicker } from 'meteor/drewy:datetimepicker';
import { datepicker2 } from 'meteor/deepwell:bootstrap-datepicker2';


myCreateFunc = function() {
        $('.datepicker').datepicker();
        $('.datetimepicker').datetimepicker();
        console.log("OLa");
    }
;
