var allClients = [];
// sign up script starts
reg = () => {
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
        window.location.href = "index.html";
        }, 2000);        
    };
    localStorage.localClient = JSON.stringify(allClients);
    // conditionals checking for inputs field ends
}