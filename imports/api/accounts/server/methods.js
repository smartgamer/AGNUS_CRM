
if (Meteor.isServer) {
    Meteor.methods({
        deleteAccount: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            Accounts.remove(id);
        }
    });
}