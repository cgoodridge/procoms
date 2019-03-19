<html>
    <head>
        <title>PROCOMS</title>
        <link rel="stylesheet" href="./css/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Raleway:100,200" rel="stylesheet">
    </head>
    <body>
        <div class="console">
                <nav class="console-header">
                        <div class="menu-header">
                            <h2>Programme: M.Sc. Information Technology</h2>
                            <div>
                                <p>User: <strong id = "loggedIn"></strong></p>
                                <p>Role: Administrator</p>
                            </div>
                        </div>
        
                            <div class="menu" id="menu">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                    </nav>
            
            <h3>NEW STUDENT</h3>
            <form class="new-student" name="newStudent" action="">
                <input type="text" placeholder="Student ID" name="studentID" class="input-new" required>
                <input type="text" placeholder="Firstname" name="firstname" class="input-new" required>
                <input type="text" placeholder="Lastname" name="lastname" class="input-new" required>
                <input type="text" placeholder="Email" name="email" class="input-new" required>
                <textarea name="address" placeholder="Address" cols="30" rows="10" class="input-new" required></textarea>
                
            </form>
            <div>
                <button type="submit" class="btn" id="addButton">Add</button>
                <button type="submit" class="btn-cancel" id="cancelButton">Cancel</button>
            </div>
            
        </div>
        <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
        <script type="text/javascript" src="js/Student.js"></script>
        <script type="text/javascript" src="./js/app.js"></script>
    </body>
</html>