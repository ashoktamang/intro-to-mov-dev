####For this sample to work you must do the following:

+ Create an account in [Parse](https://www.parse.com/apps)
+ Create a new application by clicking on "Create a new App" Button in the Dashboard
+ Create a user in that new application, set the username to `admin` and the password to `test`

    **Screen Shot: Creating a new user account in application**
![alt tag](https://raw.githubusercontent.com/aaronksaunders/info-rest-api-ionic-sample/master/screenshots/Screenshot-Add-A-User.png)
+ Go to the Settings - Keys Section and copy appropriate keys and update the variable named `authenticationHeaders` in the sample code provided with the appropriate values; around line 68 in the code.

    **Screen Shot: Locating authentcation keys for application**
![alt tag](https://raw.githubusercontent.com/aaronksaunders/info-rest-api-ionic-sample/master/screenshots/Screenshot-Show-App-Keys.png)

####Variable in sample code provided

    var authenticationHeaders = {
        "x-parse-application-id": "ADD YOUR APPLICATION ID",
        "x-parse-rest-api-key": "ADD YOUR PARSE REST API KEY"
    };
