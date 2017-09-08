if(Meteor.isCliente){
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard')
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home')
    });

}

FlowRouter.triggers.enter([function(context,redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home')
    }
}]);


FlowRouter.route('/',{
    name:'home',
    action(){
        if(Meteor.userId()){
            FlowRouter.go('dashboard')
        }

        BlazeLayout.render('HomeLayout',  {content: "blogHome"}  );
    }
});

FlowRouter.route('/recipe-book',{
    name:'recipe-book',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

FlowRouter.route('/recipe/:id',{
    name:'recipe',
    action(){
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});

FlowRouter.route('/products',{
    name:'products',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Products'});
    }
});

FlowRouter.route('/product/:id',{
    name:'product',
    action(){
        BlazeLayout.render('MainLayout', {main: 'ProductSingle'});
    }
});

FlowRouter.route('/products/newProduct',{
    name:'product_New',
    action(){
        BlazeLayout.render('MainLayout', {main: 'NewProduct'});
    }
});


FlowRouter.route('/accounts',{
    name:'accounts',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Accounts'});
    }
});

FlowRouter.route('/account/:id',{
    name:'account',
    action(){
        BlazeLayout.render('MainLayout', {main: 'AccountSingle'});
    }
});

FlowRouter.route('/accounts/newAccount',{
    name:'account_New',
    action(){
        BlazeLayout.render('MainLayout', {main: 'NewAccount'});
    }
});


FlowRouter.route('/Account_Records/:account',{
    name:'records',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Records'});
    }
});

FlowRouter.route('/record/:id',{
    name:'record',
    action(){
        BlazeLayout.render('MainLayout', {main: 'RecordSingle'});
    }
});

FlowRouter.route('/records/newRecords',{
    name:'record_New',
    action(){
        BlazeLayout.render('MainLayout', {main: 'NewRecord'});
    }
});