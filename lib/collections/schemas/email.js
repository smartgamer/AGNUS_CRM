import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const EmailsSchema = new SimpleSchema({
  to: {
    type: String
  },

  from: {
    type: String
  },

  subject: {
    type: String
  },

  text: {
    type: String,
    optional: true
  },

  html: {
    type: String,
    optional: true
  },

  userId: {
    type: String,
    optional: true
  },

  //jobId: {
  //  type: String,
  //  index: true
  //},

  type: {
    type: String,
    optional: true
  },

  status: {
    type: String
  },

  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      }
      return this.unset();
    }
  },

  updatedAt: {
    type: Date,
    autoValue() {
      if (this.isUpdate) {
        return new Date();
      }
      return this.unset();
    },
    //denyInsert: true,
    optional: true
  }
});

/**
* Emails Collection
*/
Emails = new Mongo.Collection("Emails");

Emails.attachSchema(EmailsSchema);