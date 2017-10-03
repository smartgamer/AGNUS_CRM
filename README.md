# AGNUS_CRM

AGNUS_CRM is Open Source CRM Build on Meteor.JS + MONGDB + BlazeTemplates.

##Database

Records
- id
- desc
- summary
- account 
- author
- createdAt
- openAt	
- status:  ['Open','In Progress','Canceled','Close','Done']
- ListAppoiments       
    

Appoiment
- id
- desc
- summary
- type [ Email, Task, Meeting, Call] 
- account_Id
- record_Id
- CreatedAt
- Date
- Author
- Status [Open, Close]

Email 
- from,
- To : String List
- CC : String List
- BCC : String List
- Message : Text
- Template :  HTML
	
	
Task
- Date
- Begin
- End
- Time
- Discount

SerialNumber
- SerialNumber: String

Product 
- product: String,
- desc: String,
- family: String,
- price: Number,
- summary: String,
- author:  String,
- createdAt:  Date,
- haveSerial:Boolean,
- serialNumbers: Array,
        

### License

Copyright © [GNU General Public License v3.0](./LICENSE.md)
