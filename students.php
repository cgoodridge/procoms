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
            <h3>Students</h3>
            <div class="newStudent">
                <a href="./new.html">New Student</a>
            </div>
            <!-- <div class="w3-bar w3-black">
                <button class="w3-bar-item w3-button" onclick="openYear('2018')">2018</button>
                <button class="w3-bar-item w3-button" onclick="openYear('2017')">2017</button>
                <button class="w3-bar-item w3-button" onclick="openYear('2016')">2016</button>
              </div> -->


            <!-- TODO Generate list dynamically -->
            <!-- TODO Add tabs for years -->
                <div class="table-class">
                    <table style="width: 100%" class="year" id="2018" name="2018">
                        <!-- Table data generated dynamically -->
                    </table>
                
                </div>
            </div>
        </div>
        
    </body>
        <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script type="text/javascript" src="./js/script.js"></script>
    <script type="text/javascript" src="./js/app.js"></script>
</html>