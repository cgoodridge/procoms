<html>
    <head>
        <title>PROCOMS</title>
        <link rel="stylesheet" href="./css/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Raleway:100,200" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <form action="./scripts/validate.php" name="loginForm" method="POST" class="login">
                <h2>Programme Coordinator Management System</h2>
                <h3>M.Sc. Information Technology</h3>
                <!-- Login Creds at the top of app.js -->
                <div class="signIn">
                    <input type="text" placeholder="Email Address" name="email" id="email" class="input" required>
                    <input type="password" placeholder="Password" name="password" id="password" class="input" required>
                    <p class="errorText" id="errorText"></p>
                    
                </div>
            </form>
            <button type="submit" class="btn" id="validate">Sign In</button>
            <a href="">Forgot Password</a>
        </div>
    </body>
    <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
        <script type="text/javascript" src="./js/app.js"></script>
</html>