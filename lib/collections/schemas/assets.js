import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schemas ={}

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
  stores: [imageStore]
});

Images.deny({
  insert: function(){
  return false;
  },
  update: function(){
  return false;
  },
  remove: function(){
  return false;
  },
  download: function(){
  return false;
  }
});

Images.allow({
  insert: function(){
  return true;
  },
  update: function(){
  return true;
  },
  remove: function(){
  return true;
  },
  download: function(){
  return true;
  }
 });

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