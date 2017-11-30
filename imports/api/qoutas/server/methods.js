if (Meteor.isServer) {
    Meteor.methods({
        deleteQoute: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            Qoutas.remove(id);
        }
    });
}