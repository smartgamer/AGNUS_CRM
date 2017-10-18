import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

/**
 * Metafield Schema
 * From reactionecomerce
 */

Metafield = new Mongo.Collection('metafield');

export const MetafieldSchema = new SimpleSchema({
  key: {
    type: String,
    max: 30,
    optional: true
  },
  namespace: {
    type: String,
    max: 20,
    optional: true
  },
  scope: {
    type: String,
    optional: true
  },
  value: {
    type: String,
    optional: true
  },
  valueType: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
});

Metafield.attachSchema(MetafieldSchema);

