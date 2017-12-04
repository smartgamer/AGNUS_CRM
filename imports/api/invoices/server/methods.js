if (Meteor.isServer) {
    Meteor.methods({
        deleteInvoice: function(id){
            // Antes de Remover validar todos os chaves estrangeiras
            Invoices.remove(id);
        }
    });
}