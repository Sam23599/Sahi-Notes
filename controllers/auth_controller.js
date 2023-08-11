const User = require('../models/user');

module.exports.signuppage = function(req, res){
    return res.render('signup');
}

module.exports.loginPage = function(req, res){
    return res.render('login');
}

module.exports.login = async function (req, res){
    var email = req.body.email;
    var password = req.body.password;
    var user = await User.findOne({ email: email});

    console.log('login user details-');
    console.log(user);
    if(user.password===password){
        return res.redirect('/user/profile');
    }
    else{
        return res.redirect('back');
    }
}

module.exports.signup = async function(req, res){
    
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;

    try {
        if (password!== confirm_password){
            console.log('Passwords dont match')
            return res.redirect('back');
        } else {
            if(checkPasswordStrength(password).success){
                // 
                var user = await User.findOne({email: email});
                if(user){
                    console.log("User already exist");
                    return res.redirect('/auth/login');
                }
                else{
                    var user = await User.create({name: name, email: email, password: password});
                    console.log('sigup user details-')
                    console.log(user);
                    return res.redirect('/auth/login');
                }
            }
            else{
                // alert user for weak password
                console.log(checkPasswordStrength(password).message);
            }
        }
    } catch(error) {
        console.log(error);
    }
    return res.redirect('back');
}

function checkPasswordStrength (password){
    if (password.length <3){
        return {
            "success" : false,
            "message" : "password too small"
        }
    }
    else if (password.length > 24){
        return {
            "success" : false,
            "message" : "password too big"
        }
    }
    // else if(condition) {
        
    // }
    else{
        return {"success": true, "message":"Password perfect"};
    }

}