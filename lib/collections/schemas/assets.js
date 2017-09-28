import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schemas ={}

export const AssetsSchema = new SimpleSchema({
  type: {
    type: String
  },
  name: {
    type: String,
    optional: true
  },
  /**
   * namespace for i18n. This allows to load translation for custom plugins
   */
  ns: {
    type: String,
    optional: true
  },
  path: {
    type: String,
    optional: true
  },
  content: {
    type: String,
    optional: true
  }
});

/**
 *  Assets Collection
 *  Store file asset paths or contents in a Collection
 */
export const Assets = new Mongo.Collection("Assets");

Assets.attachSchema(AssetsSchema);