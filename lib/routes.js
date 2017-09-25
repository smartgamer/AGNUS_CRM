if(Meteor.isClient){
//    Accounts.onLogin(function(){
//        FlowRouter.go('dashboard')
//    });

    Accounts.onLogout(function(){
        FlowRouter.go('home')
    });

}

FlowRouter.route('/private', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function() {
        FlowRouter.go('home')
    }
  });

  //FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

//Validação User no tutorial
//FlowRouter.triggers.enter([function(context,redirect){
//    if(!Meteor.userId()){
//        FlowRouter.go('home')
//    }
//}]);


FlowRouter.route('/',{
    name:'home',
    action(){
        //if(Meteor.userId()){
        //    FlowRouter.go('dashboard')
        //}

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

//Router Records
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

//Router Appoiment
FlowRouter.route('/Appoiments/',{
    name:'appoiments',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Appoiments'});
    }
});

FlowRouter.route('/Appoiment/:id',{
    name:'appoiment',
    action(){
        BlazeLayout.render('MainLayout', {main: 'AppoimentSingle'});
    }
});

FlowRouter.route('/Appoiments/newAppoiment',{
    name:'appoiment_New',
    action(){
        BlazeLayout.render('MainLayout', {main: 'NewAppoiment'});
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

FlowRouter.route('/Users/user-profile',{
    name:'user_profile',
    action(){
        BlazeLayout.render('MainLayout', {main: 'user_profile'});
    }
});
