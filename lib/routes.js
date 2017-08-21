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