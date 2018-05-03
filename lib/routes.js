

if (Meteor.isClient) {
    //    Accounts.onLogin(function(){
    //        FlowRouter.go('dashboard')
    //    });

    //Accounts.onLogout(function(){
    //    FlowRouter.go('home')
    //});

}

// FlowRouter.route('/private', {
//     triggersEnter: [AccountsTemplates.ensureSignedIn],
//     action: function () {
//         FlowRouter.go('home')
//     }
// });

//FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

//Validação User no tutorial
// FlowRouter.triggers.enter([function (context, redirect) {
//     if (!Meteor.userId()) {
//         FlowRouter.go('home')
//     }
// }]);


// FlowRouter.route('/', {
//     name: 'home',
//     action() {
//         //if(Meteor.userId()){
//         //    FlowRouter.go('dashboard')
//         //}

//         BlazeLayout.render('HomeLayout', { content: "blogHome" });
//     }
// });

FlowRouter.route('/', {
	name: 'home',
	action(){
		if(!Meteor.userId()){
            BlazeLayout.render('HomeLayout', { content: "blogHome" });
            //FlowRouter.go('login');
		}else{
            BlazeLayout.render('MainLayout', { main: 'homepage' });
        }
		
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

FlowRouter.route('/banks', {
    name: 'banks',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Banks' });
    }
});

FlowRouter.route('/bank/:id', {
    name: 'bank',
    action() {
        BlazeLayout.render('MainLayout', { main: 'BankDetails' });
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


//=======USER=======

// AccountsTemplates.configureRoute('signIn', {
//     layoutType: 'blaze',
//     name: 'signin',
//     path: '/login',
//     template: 'myLogin',
//     layoutTemplate: 'MainLayout',
//     layoutRegions: {
//         nav: 'customNav',
//         footer: 'customFooter'
//     },
//     contentRegion: 'main',
//     redirect: '/Users/user-profile'
// });

// FlowRouter.route('/Users/user-profile', {
//     name: 'user_profile',
//     action() {
//         BlazeLayout.render('MainLayout', { main: 'user_profile' });
//     }
// });

// AccountsTemplates.configureRoute('signUp');


// AccountsTemplates.configureRoute('forgotPwd');

// AccountsTemplates.configureRoute('resetPwd', {
//     name: 'resetPwd',
//     path: '/reset-password'
// });

FlowRouter.route('/login', {
	name: 'login',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('home');
		}
		BlazeLayout.render('creationLayout', { main: 'login' });
	}
});
FlowRouter.route('/register', {
	name: 'register',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('home');
		}
		BlazeLayout.render('creationLayout', { main: 'register' });
	}
});
FlowRouter.route('/forgot-password', {
	name: 'forgotPassword',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('home');
		}
		BlazeLayout.render('creationLayout', { main: 'forgotPassword' });
	}
});
FlowRouter.route('/admin/:id', {
	name: 'adminProfile',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		var userId = Meteor.userId();
		if (Roles.userIsInRole(userId, ['teacher'])) {
			FlowRouter.go('home');
		}
		BlazeLayout.render('MainLayout', { main: 'adminProfile' });
	}
});

FlowRouter.route('/teachers', {
	name: 'teachers',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		var userId = Meteor.userId();
		if (Roles.userIsInRole(userId, ['teacher'])) {
			FlowRouter.go('home');
		}
		BlazeLayout.render('MainLayout', { main: 'teachers' });
	}
});
FlowRouter.route('/teacher/:id', {
	name: 'singleTeacher',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		BlazeLayout.render('MainLayout', { main: 'teacherDetail' });
	}
});
FlowRouter.route('/edit-teacher/:id', {
	name: 'editSingleTeacher',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		BlazeLayout.render('MainLayout', { main: 'teacherEdit' });
	}
});


// FlowRouter.route('/school/:id', {
//     name: 'School_Dasboard',
//     action() {
//         BlazeLayout.render('MainLayout', { main: 'school_Dasboard' })
//     }
// });




FlowRouter.route('/Eschool', {
    name: 'Eschool_Index',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Eschool_Index' })
    }
});

//======SCHOOL=====
FlowRouter.route('/escolas', {
	name: 'schools_list',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		var userId = Meteor.userId();
		// if (!Roles.userIsInRole(userId, ['superAdmin'])) {
		// 	FlowRouter.go('home');
		// }
		BlazeLayout.render('MainLayout', { main: 'schools' });
	}
});
FlowRouter.route('/school/:id', {
	name: 'school_Profile',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		var userId = Meteor.userId();
		// if (Roles.userIsInRole(userId, ['teacher'])) {
		// 	FlowRouter.go('home');
		// }
		BlazeLayout.render('MainLayout', { main: 'schoolProfile' });
	}
});
FlowRouter.route('/edit-school/:id', {
	name: 'editSchool',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		var userId = Meteor.userId();
		// if (Roles.userIsInRole(userId, ['teacher'])) {
		// 	FlowRouter.go('home');
		// }
		BlazeLayout.render('MainLayout', { main: 'editSchool' });
	}
});
FlowRouter.route('/add-school', {
	name: 'addSchool',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('home');
		}
		var userId = Meteor.userId();
		// if (!Roles.userIsInRole(userId, ['superAdmin'])) {
		// 	FlowRouter.go('home');
		// }
		BlazeLayout.render('MainLayout', { main: 'addSchool' });
	}
});




FlowRouter.route('/Grades', {
    name: 'Grade_Index',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Grade_Index' })
    }
});

FlowRouter.route('/Grade/:id', {
    name: 'Grade_Details',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Grade_Details' })
    }
});

FlowRouter.route('/students', {
	name: 'students',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		BlazeLayout.render('MainLayout', { main: 'students' });
	}
});
FlowRouter.route('/student/:id', {
	name: 'singleStudent',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		BlazeLayout.render('MainLayout', { main: 'studentDetail' });
	}
});
FlowRouter.route('/edit-student/:id', {
	name: 'editSingleStudent',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		BlazeLayout.render('MainLayout', { main: 'studentEdit' });
	}
});
FlowRouter.route('/add-student', {
	name: 'addStudent',
	action(){
		if(!Meteor.userId()){
			FlowRouter.go('login');
		}
		var userId = Meteor.userId();
		if (Roles.userIsInRole(userId, ['teacher'])) {
			FlowRouter.go('home');
		}
		BlazeLayout.render('MainLayout', { main: 'addStudent' });
	}
});
