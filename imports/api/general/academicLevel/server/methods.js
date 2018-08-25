
if (Meteor.isServer) {
    Meteor.methods({
        deleteAcademicLevel: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            AcademicLevel.remove(id);
        }
    });
}

// if(Meteor.isClient){
//     Meteor.subscribe('academicLevel');
// }