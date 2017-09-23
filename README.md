# AGNUS_CRM

Build on Meteor.JS + MONGDB + BlazeTemplates.

Database

Appoiment
	id
	desc
	summary
	type { Email, Task, Meeting, Call }
	account_Id
	record_Id
	CreatedAt
	Date
	Author
	Status {Open, Close}

	Email {
		from,
		To - List
		CC - List
		BCC - List
		Message - Text
		Template -  HTML
	}
	
