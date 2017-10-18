import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

/**
 * workflow schema for attaching to collection where
 * PackageWorkflow is controlling view flow
 * Shop defaultWorkflow is defined in Shop
 * From reactionecomerce
 */

Workflow = new Mongo.Collection('workflow');



export const WorkflowSchema = new SimpleSchema({
  status: {
    type: String,
    defaultValue: "new",
    index: 1
  },
  workflow: {
    type: Array,
    optional: true
  },
  "workflow.$":{
      type: String

  }
});

Workflow.attachSchema(WorkflowSchema );
