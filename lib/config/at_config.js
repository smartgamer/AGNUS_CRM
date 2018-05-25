var mySubmitFunc = function(error, state){
    if (!error) {
      if (state === "signIn") {
        // Successfully logged in
        // ...
      }
      if (state === "signUp") {
        // Successfully registered
        // ...
      }
    }
};

var myPostLogout = function(){
    //example redirect after logout
    Router.go('/');
};

var myPreSubmitFunc = function(){

};

var myPostSubmitFunc = function(){

};

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myPostLogout,
    /*onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,
    postSignUpHook: myPostSubmitFunc,
    */

    reCaptcha: {
        siteKey: '6LfWCDIUAAAAAIzssngqimxG3lwH56mDGbQIrb4x',
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: false,

    // Texts
    texts: {
        navSignIn: "Entrar",
        navSignOut: "Sair",
        optionalField: "optional",
        pwdLink_pre: "Esqueceu Password",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        resendVerificationEmailLink_pre: "Perdeu a Verificação de email?",
        resendVerificationEmailLink_link: "Enviar Denovo",
        resendVerificationEmailLink_suff: "",
        sep: "Ou",
        signInLink_pre: "Se Já tens Alguma Conta",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "Se não tens nenhuma conta",
        signUpLink_link: "signUp",
        signUpLink_suff: "",
        socialAdd: "add",
        socialConfigure: "configure",
        button: {
            signUp: "Registrar Agora! Text",
            changePwd: "Password Text",
            enrollAccount: "Enroll Text",
            forgotPwd: "Esqueceu Password Text",
            resetPwd: "Reset Password Text",
            signIn: "Entrar Text",
            signUp: "Sair Text",
            //signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recuperar Password",
            changePwd: "Alterar Password",
            enrollAccount: "Enroll Title",
            resetPwd: "Reset da Password Title",
            signIn: "Entrar Title",
            signUp: "Sair Title",
            verifyEmail: "Verificar Email Title",

            //forgotPwd: "Recover Your Password"
        },
        info: {
            emailSent: "info.emailEnviado",
            emailVerified: "info.emailVerficiado",
            pwdChanged: "info.passwordAlterado",
            pwdReset: "info.passwordReset",
            pwdSet: "info.passwordReset",
            signUpVerifyEmail: "Registrado Com Sucesso! Porfavor verifique o email e siga as instruções.",
            verificationEmailSent: "Acabamos de enviar um email para si. Caso não tenha recebido, verifique a sua caixa de Spam.",
            
            // emailSent: "info.emailSent",
            // emailVerified: "info.emailVerified",
            // pwdChanged: "info.passwordChanged",
            // pwdReset: "info.passwordReset",
            // pwdSet: "info.passwordReset",
            // signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",
            // verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
        },
        inputIcons: {
            isValidating: "fa fa-spinner fa-spin",
            hasSuccess: "fa fa-check",
            hasError: "fa fa-times",
        },
        errors: {
            accountsCreationDisabled: "A criação de utilizadores encontra-se bloqueado! Por favor entre em contacto com os Administradores do Sistema!!",
            cannotRemoveService: "Não é possivel com os serviços activos! Por favor entre em contacto com os Administradores do Sistema!",
            captchaVerification: "Verificação Captcha falhou!",
            loginForbidden: "O utilizador não existe, ou falha de Login! Por favor entre em contacto com os Administradores do Sistema!",
            mustBeLoggedIn: "O utilizador deve estar logado",
            pwdMismatch: "Password Errado",
            validationErrors: "Valide os Erros",
            verifyEmailFirst: "Por favor verifique primeiro o seu email. Clique no link e siga!",


            // accountsCreationDisabled: "Client side accounts creation is disabled!!!",
            // cannotRemoveService: "Cannot remove the only active service!",
            // captchaVerification: "Captcha verification failed!",
            // loginForbidden: "error.accounts.Login forbidden",
            // mustBeLoggedIn: "error.accounts.Must be logged in",
            // pwdMismatch: "error.pwdsDontMatch",
            // validationErrors: "Validation Errors",
            // verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
        }
    },
});

/* AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Nome",
    //func: function(value){return value !== 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Telefone",
    required: true,
    // func: function (number) {
    //     if (Meteor.isServer){
    //       //if (isValidPhone(number))
    //       //    return false; // meaning no error!
    //       return true; // Validation error!
    //     }
    // },
    errStr: 'Invalid Phone number!',
});

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    displayName: "Nome Utilizador",
    required: true,
    // func: function(value){
    //     if (Meteor.isClient) {
    //         console.log("Validating username...");
    //         var self = this;
    //         Meteor.call("userExists", value, function(err, userExists){
    //             if (!userExists)
    //                 self.setSuccess();
    //             else
    //                 self.setError(userExists);
    //             self.setValidating(false);
    //         });
    //         return;
    //     }
    //     // Server
    //     return Meteor.call("userExists", value);
    // },
});

AccountsTemplates.addField({
    _id: "gender",
    type: "select",
    displayName: "Sexo",
    select: [
        {
            text: "Masculino",
            value: "male",
        },
        {
            text: "Feminino",
            value: "female",
        },
    ],
});

AccountsTemplates.addField({
    _id: "mailing_list",
    type: "checkbox",
    displayName: "Subscribe me to mailing List",
});

AccountsTemplates.addField({
    _id: 'reg_code',
    type: 'hidden'
}); */

// AccountsTemplates.addField({
//     _id: "address",
//     type: "text",
  
//     // Options object with custom properties for my layout. At the moment, there are
//     // no special properties; it is up the developer to invent them
//     options: {
//       // Put a divider before this field
//       dividerBefore: true
//     }
// });

