if (Meteor.isServer) {
    Meteor.methods({
        deleteCompanies: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            Companies.remove(id);
        }
    });
}