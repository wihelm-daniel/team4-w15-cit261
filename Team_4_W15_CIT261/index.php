<!DOCTYPE html>
<html>
    <head>
        <title>My Scheduler</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
              
              
    </head>
    <body>
        <h1 class="logo">My Scheduler</h1>
            
        <form name="login" action="/login/login.php" id="loginform">
            <fieldset>
            <legend>All fields are required.</legend>
                <label for="username">User Name:</label><input type="text" name="username" id="username" size="8" required>
                <label for="password">Email:</label><input type="text" name="password" id="email" size="8" required>
                <label for="action" id="actionLabel">&nbsp;</label><input type="submit" name="action" id="action" value="Send">
            </fieldset>
        </form>
        
        <button type="button" onClick="window.location.href"register.php">REGISTER</button>
        
    </body>