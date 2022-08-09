var allClients = [];
getPreviousClients = () => {
    if(localStorage.localClient){
        allClients = JSON.parse(localStorage.localClient);
    }
}
// sign up script starts
signUp = () => {
    var FirstName = Firstname.value;
    Firstname.value = "";
    var LastName = Lastname.value;
    Lastname.value = "";
    var email = Email.value;
    Email.value = "";
    var PassWord = Password.value;
    Password.value = "";
    

    var Client = {
        firstName:FirstName,
        lastName:LastName,
        eMail:email,
        passWord:PassWord,
    }
    
    // conditionals checking for inputs field starts
    if(Client.firstName == '' || Client.lastName == "" ||Client.eMail == "" || Client.passWord ==""){
        disp.innerHTML = `<div class="alert alert-danger text-center"> Input all field correctly</div>`;
    }else{
        allClients.push(Client)
        disp.innerHTML = `<div class="alert alert-success text-center">Success,Welcome on board ${Client.firstName}</div>`;
        setTimeout(() => {
        window.location.href = "signIn.html";
        }, 2000);        
    };
    localStorage.localClient = JSON.stringify(allClients);
    // conditionals checking for inputs field ends
}

// script for sign in starts 
signIn = () => {
    signInEmail = email.value;
    email.value = "";
    signInPassword = password.value;
    password.value = "";
    getClients = JSON.parse(localStorage.getItem("localClient"));
    for (let i = 0; i < getClients.length; i++) {
        if(signInEmail == getClients[i].eMail && signInPassword == getClients[i].passWord){
            disp.innerHTML = `<div class="alert alert-success text-center">Success,Welcome on board ${getClients[i].firstName}</div>`;
            setTimeout(() => {
                window.location.href = "index.html"
            }, 1000);
        }else if(signInEmail == getClients[i].eMail && signInPassword != getClients[i].passWord){
            disp.innerHTML = `<div class="alert alert-danger text-center">Incorrect Password</div>`;
            setTimeout(() => {
                window.location.href = "signIn.html"
            }, 2000);
        }else if(signInEmail != getClients[i].eMail && signInPassword == getClients[i].passWord){
            disp.innerHTML = `<div class="alert alert-danger text-center">Incorrect Email</div>`;
            setTimeout(() => {
                window.location.href = "signIn.html"
            }, 2000);
        }else if(signInEmail != getClients[i].eMail && signInPassword != getClients[i].passWord){
            disp.innerHTML = `<div class="alert alert-danger text-center">Incorrect Email and Password</div>`;
            setTimeout(() => {
                window.location.href = "signIn.html"
            }, 2000);
        }
        
    }
}
// signIn script ends