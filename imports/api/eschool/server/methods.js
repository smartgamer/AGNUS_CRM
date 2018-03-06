if (Meteor.isServer) {
    Meteor.methods({
        deleteAcademic_Year: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            academic_Year.remove(id);
        }
    });
}

if(Meteor.isClient){
    Meteor.subscribe('academic_Year');
}