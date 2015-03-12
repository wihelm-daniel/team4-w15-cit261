<form name="login" action="/login/login.php" id="loginform">
    <fieldset>
    <legend>All fields are required.</legend>
        <label for="username">User Name:</label><input type="text" name="username" id="username" size="8" value="<?php echo $username; ?>" required>
        <label for="password">Email:</label><input type="text" name="password" id="email" size="45"  value="<?php echo $password; ?>" required>
        <label for="action" id="actionLabel">&nbsp;</label><input type="submit" name="action" id="action" value="Send">
    </fieldset>
</form>