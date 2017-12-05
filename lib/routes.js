

if (Meteor.isClient) {
    //    Accounts.onLogin(function(){
    //        FlowRouter.go('dashboard')
    //    });

    //Accounts.onLogout(function(){
    //    FlowRouter.go('home')
    //});

}

FlowRouter.route('/private', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function () {
        FlowRouter.go('home')
    }
});

//FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

//Validação User no tutorial
FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home')
    }
}]);


FlowRouter.route('/', {
    name: 'home',
    action() {
        //if(Meteor.userId()){
        //    FlowRouter.go('dashboard')
        //}

        BlazeLayout.render('HomeLayout', { content: "blogHome" });
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Recipes' });
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });
    }
});

FlowRouter.route('/products', {
    name: 'products',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Products' });
    }
});

FlowRouter.route('/product/:id', {
    name: 'product',
    action() {
        BlazeLayout.render('MainLayout', { main: 'ProductSingle' });
    }
});

FlowRouter.route('/products/newProduct', {
    name: 'product_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewProduct' });
    }
});


FlowRouter.route('/accounts', {
    name: 'accounts',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Accounts' });
    }
});

FlowRouter.route('/account/:id', {
    name: 'account',
    action() {
        BlazeLayout.render('MainLayout', { main: 'AccountSingle' });
    }
});

FlowRouter.route('/accounts/newAccount', {
    name: 'account_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewAccount' });
    }
});

//Router Records
FlowRouter.route('/Account_Records/:account', {
    name: 'records',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Records' });
    }
});

FlowRouter.route('/record/:id', {
    name: 'record',
    action() {
        BlazeLayout.render('MainLayout', { main: 'RecordSingle' });
    }
});

FlowRouter.route('/records/newRecords', {
    name: 'record_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewRecord' });
    }
});

//Router Appoiment
FlowRouter.route('/Appoiments/', {
    name: 'appoiments',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Appoiments' });
    }
});

FlowRouter.route('/Appoiment/:id', {
    name: 'appoiment',
    action() {
        BlazeLayout.render('MainLayout', { main: 'AppoimentSingle' });
    }
});

FlowRouter.route('/Appoiments/newAppoiment', {
    name: 'appoiment_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewAppoiment' });
    }
});

//Router Family
FlowRouter.route('/Familys/', {
    name: 'familys',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Familys' });
    }
});

FlowRouter.route('/Family/:id', {
    name: 'family',
    action() {
        BlazeLayout.render('MainLayout', { main: 'FamilySingle' });
    }
});

FlowRouter.route('/Family/newFamily', {
    name: 'family_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewFamily' });
    }
});

FlowRouter.route('/Settings', {
    name: 'settings',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Settings' });
    }
});

//Router Customer
FlowRouter.route('/Customers/', {
    name: 'Customers',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Customers' });
    }
});

FlowRouter.route('/Customer/:id', {
    name: 'customer',
    action() {
        BlazeLayout.render('MainLayout', { main: 'CustomerSingle' });
    }
});

FlowRouter.route('/Customer/newCustomer', {
    name: 'customer_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewCustomer' });
    }
});


AccountsTemplates.configureRoute('signIn', {
    layoutType: 'blaze',
    name: 'signin',
    path: '/login',
    template: 'myLogin',
    layoutTemplate: 'MainLayout',
    layoutRegions: {
        nav: 'customNav',
        footer: 'customFooter'
    },
    contentRegion: 'main',
    redirect: '/Users/user-profile'
});

FlowRouter.route('/Users/user-profile', {
    name: 'user_profile',
    action() {
        BlazeLayout.render('MainLayout', { main: 'user_profile' });
    }
});

AccountsTemplates.configureRoute('signUp');


AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetPwd',
    path: '/reset-password'
});


FlowRouter.route('/banks', {
    name: 'banks',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Banks' });
    }
});

FlowRouter.route('/bank/:id', {
    name: 'bank',
    action() {
        BlazeLayout.render('MainLayout', { main: 'BankSingle' });
    }
});

FlowRouter.route('/banks/newBank', {
    name: 'bank_New',
    action() {
        BlazeLayout.render('MainLayout', { main: 'NewBank' });
    }
});

FlowRouter.route('/qoutas', {
    name: 'qoutas_list',
    action() {
        BlazeLayout.render('MainLayout', { main: 'qoutasList' })
    }
});

FlowRouter.route('/qoute/:id', {
    name: 'qoute',
    action() {
        BlazeLayout.render('MainLayout', { main: 'qouteSingle' })
    }
});



FlowRouter.route('/invoices', {
    name: 'invoices_List',
    action() {
        BlazeLayout.render('MainLayout', { main: 'invoicesList' })
    }
});

FlowRouter.route('/invoice/:id', {
    name: 'invoice',
    action() {
        BlazeLayout.render('MainLayout', { main: 'invoiceSingle' })
    }
});

FlowRouter.route('/companies', {
    name: 'companies_List',
    action() {
        BlazeLayout.render('MainLayout', { main: 'companiesList' })
    }
});

FlowRouter.route('/company/:id', {
    name: 'company',
    action() {
        BlazeLayout.render('MainLayout', { main: 'companySingle' })
    }
});