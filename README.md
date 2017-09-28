# AGNUS_CRM

AGNUS_CRM is Open Source CRM Build on Meteor.JS + MONGDB + BlazeTemplates.

###Database

Records
	id
	desc
   	summary
    	account 
    	author
    	createdAt
    	openAt	
	status:  ['Open','In Progress','Canceled','Close','Done']
	ListAppoiments       
    

Appoiment
	id
	desc
	summary
	type [ Email, Task, Meeting, Call] 
	account_Id
	record_Id
	CreatedAt
	Date
	Author
	Status [Open, Close]

	Email {
		from,
		To - List
		CC - List
		BCC - List
		Message - Text
		Template -  HTML
	}
	
	Task{
		Date
		Begin
		End
		Time
		Discount
	}

### License

Copyright © [GNU General Public License v3.0](./LICENSE.md)
