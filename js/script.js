
$(document).ready(function(){

var fetchedResults = JSON.parse(localStorage.getItem('userObject'));

for (var i = 0;  i < fetchedResults.length; i++)
    {

        var tr = document.createElement("tr");
        
        document.getElementById("2018").appendChild(tr);

        
        var data = document.createElement("td");
        tr.appendChild(data);

        data.innerHTML = ` <a href="#">Edit</a> `+ ` <a href="#">Delete</a>     ` +" Student ID: "  + fetchedResults[i].studentId + " First Name: " + fetchedResults[i].firstname + " Last Name: " + fetchedResults[i].lastname + " Email: " + fetchedResults[i].email;
        
        // for (var j = 0; j < 6; j++)
        // {
        //     // row.innerHTML=row.innerHTML + fetchedResults[0].lastname;
        // }
            
    }
});