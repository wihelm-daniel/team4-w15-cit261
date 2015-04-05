function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax_info.xhtml",true);
xmlhttp.send();
}


function saveEdits() {

//get the editable element
var editElem = document.getElementById("edit");
var editElem1 = document.getElementById("edit1");
var editElem2 = document.getElementById("edit2");
//get the edited element content
var userVersion = editElem.innerHTML;
var userVersion1 = editElem1.innerHTML;
var userVersion2 = editElem2.innerHTML;

//save the content to local storage
localStorage.userEdits = userVersion;
localStorage.userEdits1 = userVersion1;
localStorage.userEdits2 = userVersion2;

//write a confirmation to the user
document.getElementById("update").innerHTML="Edits saved!";

}

function saveEdits1() {

//get the editable element
var editElem3 = document.getElementById("edit3");
var editElem4 = document.getElementById("edit4");
var editElem5 = document.getElementById("edit5");
//get the edited element content
var userVersion3 = editElem3.innerHTML;
var userVersion4 = editElem4.innerHTML;
var userVersion5 = editElem5.innerHTML;

//save the content to local storage
localStorage.userEdits3 = userVersion3;
localStorage.userEdits4 = userVersion4;
localStorage.userEdits5 = userVersion5;

//write a confirmation to the user
document.getElementById("update1").innerHTML="Edits saved!";

}

function saveEdits2() {

//get the editable element
var editElem6 = document.getElementById("edit6");
var editElem7 = document.getElementById("edit7");
var editElem8 = document.getElementById("edit8");
//get the edited element content
var userVersion6 = editElem6.innerHTML;
var userVersion7 = editElem7.innerHTML;
var userVersion8 = editElem8.innerHTML;

//save the content to local storage
localStorage.userEdits6 = userVersion6;
localStorage.userEdits7 = userVersion7;
localStorage.userEdits8 = userVersion8;

//write a confirmation to the user
document.getElementById("update2").innerHTML="Edits saved!";

}

function saveEdits3() {

//get the editable element
var editElem9 = document.getElementById("edit9");
var editElem10 = document.getElementById("edit10");
var editElem11 = document.getElementById("edit11");
//get the edited element content
var userVersion9 = editElem9.innerHTML;
var userVersion10 = editElem10.innerHTML;
var userVersion11 = editElem11.innerHTML;

//save the content to local storage
localStorage.userEdits9 = userVersion9;
localStorage.userEdits10 = userVersion10;
localStorage.userEdits11 = userVersion11;

//write a confirmation to the user
document.getElementById("update3").innerHTML="Edits saved!";

}
			
function saveEdits4() {

//get the editable element
var editElem12 = document.getElementById("edit12");
var editElem13 = document.getElementById("edit13");
var editElem14 = document.getElementById("edit14");
//get the edited element content
var userVersion12 = editElem12.innerHTML;
var userVersion13 = editElem13.innerHTML;
var userVersion14 = editElem14.innerHTML;

//save the content to local storage
localStorage.userEdits12 = userVersion12;
localStorage.userEdits13 = userVersion13;
localStorage.userEdits14 = userVersion14;

//write a confirmation to the user
document.getElementById("update4").innerHTML="Edits saved!";

}
			

function saveEdits5() {

//get the editable element
var editElem15 = document.getElementById("edit15");
var editElem16 = document.getElementById("edit16");
var editElem17 = document.getElementById("edit17");
//get the edited element content
var userVersion15 = editElem15.innerHTML;
var userVersion16 = editElem16.innerHTML;
var userVersion17 = editElem17.innerHTML;

//save the content to local storage
localStorage.userEdits15 = userVersion15;
localStorage.userEdits16 = userVersion16;
localStorage.userEdits17 = userVersion17;

//write a confirmation to the user
document.getElementById("update5").innerHTML="Edits saved!";

}

function saveEdits6() {

//get the editable element
var editElem18 = document.getElementById("edit18");
var editElem19 = document.getElementById("edit19");
var editElem20 = document.getElementById("edit20");
//get the edited element content
var userVersion18 = editElem18.innerHTML;
var userVersion19 = editElem19.innerHTML;
var userVersion20 = editElem20.innerHTML;

//save the content to local storage
localStorage.userEdits18 = userVersion18;
localStorage.userEdits19 = userVersion19;
localStorage.userEdits20 = userVersion20;

//write a confirmation to the user
document.getElementById("update6").innerHTML="Edits saved!";

}
			
	function checkEdits() {

//find out if the user has previously saved edits
if(localStorage.userEdits!=null)
document.getElementById("edit").innerHTML = localStorage.userEdits;

if(localStorage.userEdits1!=null)
document.getElementById("edit1").innerHTML = localStorage.userEdits1;

if(localStorage.userEdits2!=null)
document.getElementById("edit2").innerHTML = localStorage.userEdits2;

if(localStorage.userEdits3!=null)
document.getElementById("edit3").innerHTML = localStorage.userEdits3;

if(localStorage.userEdits4!=null)
document.getElementById("edit4").innerHTML = localStorage.userEdits4;

if(localStorage.userEdits5!=null)
document.getElementById("edit5").innerHTML = localStorage.userEdits5;

if(localStorage.userEdits6!=null)
document.getElementById("edit6").innerHTML = localStorage.userEdits6;

if(localStorage.userEdits7!=null)
document.getElementById("edit7").innerHTML = localStorage.userEdits7;

if(localStorage.userEdits8!=null)
document.getElementById("edit8").innerHTML = localStorage.userEdits8;

if(localStorage.userEdits9!=null)
document.getElementById("edit9").innerHTML = localStorage.userEdits9;

if(localStorage.userEdits10!=null)
document.getElementById("edit10").innerHTML = localStorage.userEdits10;

if(localStorage.userEdits11!=null)
document.getElementById("edit11").innerHTML = localStorage.userEdits11;

if(localStorage.userEdits12!=null)
document.getElementById("edit12").innerHTML = localStorage.userEdits12;

if(localStorage.userEdits13!=null)
document.getElementById("edit13").innerHTML = localStorage.userEdits13;

if(localStorage.userEdits14!=null)
document.getElementById("edit14").innerHTML = localStorage.userEdits14;

if(localStorage.userEdits15!=null)
document.getElementById("edit15").innerHTML = localStorage.userEdits15;

if(localStorage.userEdits16!=null)
document.getElementById("edit16").innerHTML = localStorage.userEdits16;

if(localStorage.userEdits17!=null)
document.getElementById("edit17").innerHTML = localStorage.userEdits17;

if(localStorage.userEdits18!=null)
document.getElementById("edit18").innerHTML = localStorage.userEdits18;

if(localStorage.userEdits19!=null)
document.getElementById("edit19").innerHTML = localStorage.userEdits19;

if(localStorage.userEdits20!=null)
document.getElementById("edit20").innerHTML = localStorage.userEdits20;

}		


			function register() {
                // Get elements
                var uname = document.getElementById("username").value;
                var pword = document.getElementById("password").value;
                
                // Check 
                if (typeof(Storage) !== "undefined") {
                // store user defined text
                    localStorage.username = uname;
                    localStorage.password = pword;
                    document.getElementById("loginMessage").innerHTML = "Your new account has been activated.";
                } else {
                    var cookieEnabled=(navigator.cookieEnabled)? true : false;
                        if (typeof navigator.cookieEnabled===cookieEnabled){ 
                            document.cookie = "username=uname; password=pword; expires=Thu, 31 Dec 2015 12:00:00 UTC";
                            document.getElementById("loginMessage").innerHTML = "Your new account has been activated.";
                        } else {
                            document.getElementById("loginMessage").innerHTML = "Your new account cannot be created until you turn cookies on.";
                            return;
                        }
                       
}
                }
            
            function loginTest() {
                // Get elements
                var uname = document.getElementById("username").value;
                var pword = document.getElementById("password").value;
                               
                // Check 
                if (typeof(Storage) != "undefined") {
                // store user defined text
                    var password = localStorage.getItem("password");
                    var username = localStorage.getItem("username");
                    
                    if (username === uname && password === pword){
                        window.open("http://localhost:8383/Team_4_W15_CIT261/MyScheduler/mainpage.php");
                    } else {
                        document.getElementById("loginMessage").innerHTML = "Your password or username are not correct. Try again.";
                             return;
                        }
                } else {
                    var username = document.cookie.username;
                    var password = document.cookie.password;
                    
                    if (username === uname && password === pword){
                         window.open("http://localhost:8383/Team_4_W15_CIT261/MyScheduler/mainpage.php");
                    } else {
                        document.getElementById("loginMessage").innerHTML = "Your password or username are not correct. Try again.";
                             return;
                            }
                    
                    }
               document.getElementById("firstDisplay").innerHTML = output; 
                    
            }

function show_monday(){
    var menu = document.getElementById('monday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}
function show_tuesday(){
    var menu = document.getElementById('tuesday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}
function show_wednesday(){
    var menu = document.getElementById('wednesday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}
function show_thursday(){
    var menu = document.getElementById('thursday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}
function show_friday(){
    var menu = document.getElementById('friday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}
function show_saturday(){
    var menu = document.getElementById('saturday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}
function show_sunday(){
    var menu = document.getElementById('sunday-dropdown');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}



