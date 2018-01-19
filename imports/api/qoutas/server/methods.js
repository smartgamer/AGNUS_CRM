if (Meteor.isServer) {
    Meteor.methods({
        deleteQoute: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            Qoutas.remove(id);
        },
        deleteQoutaMember: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            QoutasMember.remove(id);
        }
    });
}