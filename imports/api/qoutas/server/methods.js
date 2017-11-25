if (Meteor.isServer) {
    Meteor.methods({
        deleteQouta: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            Qouta.remove(id);
        }
    });
}