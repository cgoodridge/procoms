$(document).ready(function(){

    // TODO - Comment and organize code
    var loginCredentials = {email: 'theone@zion.com', password: 'smithAgent', lastname: 'Anderson', firstname: 'Neo'};

    localStorage.setItem('loginCredentials', JSON.stringify(loginCredentials));

        
    isUserSignedIn();

    
    $("#menu").click(function(){
        signOut();
        window.location.href = "./index.html";
    })

    


    var userObject = [
        {lastname: 'Constantine', firstname: 'John', email: 'constantine@darkside.com', studentId: '913666', address: '123 Darkside Avenue'},
        {lastname: 'Zatara', firstname: 'Zatanna', email: 'cigam@ssererecros.com', studentId: '124676', address: 'niosnemiD rehtonA 321'},
        {lastname: 'Stark', firstname: 'Tony', email: 'playboy@avengers.com', studentId: '864346', address: '22 Malibu Drive'},
        {lastname: 'Parker', firstname: 'Peter', email: 'mjisthebest@ny.com', studentId: '467167', address: '16 Broolyn Park'},
        {lastname: 'Vision', firstname: 'The', email: 'justiceforviz@bringmethanos.com', studentId: '627613', address: 'Avengers Compound'}
    ];
    
    
    
    localStorage.setItem('userObject', JSON.stringify(userObject));
    
    
    // var emailVal = document.getElementById('email').value;
    
    function checkEmail(theEmail) {
        console.log(theEmail);
        var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;           
        if(!theEmail.match(reEmail)) {
            // TODO - make red text appear below input forms
            document.getElementById("errorText").innerHTML = "Invalid email, try again";// modify
            return false;
        }
        else
        {
            // window.location.href = "console.html";
            console.log("Email is fine");
        }
        
        return true;
    }
    
    
    
    function checkPassword(thePassword) {
        console.log(thePassword);
     
        if(thePassword.length < 8)
        {
            document.getElementById("errorText").innerHTML = "Invalid password, must be at least 8 characters";
            return false;
        }
        else
        {
            console.log("Password is fine");
        }
    
        
        return true;
    }
    
    function checkUser(theUser)
    {
        var userCreds = JSON.parse(localStorage.getItem('loginCredentials'));
        userCreds.email;
        userCreds.password;
    
        if (checkPassword && checkEmail && theUser[0].value == userCreds.email && theUser[1].value == userCreds.password)
        {
            console.log("Validation successful");
            window.location.href = "console.php";
            // sessionStorage.setItem('firstName': userCreds.firstname, 'lastName': userCreds.lastname);
    
            sessionStorage.setItem('userSession', JSON.stringify(loginCredentials));
            
        }
        else
        {
            console.log("Validation unsuccessful");
        }
    
    }

    function isUserSignedIn()
    {
        if(sessionStorage['userSession'])
        {
            var userSession = JSON.parse(sessionStorage.getItem('userSession'));
            var header = document.getElementById("loggedIn");
                header.innerHTML = userSession.firstname + " " + userSession.lastname;
        }
        else
        {
            // window.location.href = "./index.html";
            // document.getElementById("errorText").innerHTML = "You are not signed in"
        }
    }

    function signOut()
    {
        sessionStorage.clear();
    }
    
    function newStudent(data)
    {
        var newStudent = new Student(data[0].value, data[1].value, data[2].value, data[3].value, data[4].value);
            
            fetchedResults.push(newStudent);
            localStorage.setItem('userObject', JSON.stringify(fetchedResults));
            window.location.href = "./students.html";
    
    }
    
    
    var fetchedResults = JSON.parse(localStorage.getItem('userObject'));
    console.log(fetchedResults);
    
    // console.log(typeof fetchedResults);
    // console.log(fetchedResults[0].lastname);
    // var table = document.getElementById("student-table");
    
    $("#addButton").click(function(){
        var data = $("form.new-student").serializeArray();        
        newStudent(data);
    })

    $("#validate").click(function(){
        var credentials = $("form.login").serializeArray();
        checkEmail(credentials[0].value);
        checkPassword(credentials[1].value);
        checkUser(credentials);
    })
})

 

// function openYear(year) {
//     var i;
//     var x = document.getElementsByClassName("year");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     document.getElementById(year).style.display = "block"; 
//   }




