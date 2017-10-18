import SimpleSchema from 'simpl-schema';
//import { SimpleSchema } from "meteor/aldeed:simple-schema";
SimpleSchema.extendOptions(['autoform']);

Event = new Mongo.Collection('event');

//Schema = {};

/**
 * event schema for an event log
 * From @reactioncommerce
 */
export const EventShema = new SimpleSchema({
  title: {
    type: String,
    label: "Event Title"
  },
  type: {
    type: String,
    label: "Event Type"
  },
  description: {
    type: String,
    label: "Event Description",
    optional: true
  },
  userId: {
    type: String,
    label: "User who triggered event",
    optional: true
  },
  trigger: {
    type: String,
    label: "What triggered the event",
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Created At"
  }
});

//registerSchema("Event", Event);

Event.attachSchema(EventShema );
