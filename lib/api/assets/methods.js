const Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: true, // Required to let you remove uploaded file
    onBeforeUpload(file) {
      // Allow upload files under 10MB, and only in png/jpg/jpeg formats
      if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
        return true;
      } else {
        return 'Please upload image, with size equal or less than 10MB';
      }
    }
});
  
// if (Meteor.isClient) {
//     console.log('Ola Mundo');
//     Meteor.subscribe('files.images.all');
    
// }
  
// if (Meteor.isServer) {
//     console.log('Ola Mundo');
//     Meteor.publish('files.images.all', () => {
//       return Images.collection.find({});
      
//     });
// }


// To have sample image in DB we will upload it on server startup:
if (Meteor.isServer) {
  Images.denyClient();
  Images.collection.attachSchema(Images.schema);

  Meteor.startup(function () {
    if (!Images.find().count()) {
      Images.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
        fileName: 'logo.png',
        meta: {}
      });
    }
  });

  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
} else {
  Meteor.subscribe('files.images.all');
}

export default Images;
 