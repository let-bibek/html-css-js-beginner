var name="Bibek Shrestha";
 var nam="bkx01";
var num=7;
var num2=8;
var result;
 var linebreak= "<br/>";
function myName()
{
    document.write(name+num);
    document.write(linebreak);
    document.write(nam);
    result=num+num2;
    document.write(linebreak);
    document.write(result);
    result=num%num2;
    document.write(linebreak);
    document.write("num1 % num2 = ");
    document.write(result);
    document.write("<h1>This heading is on h1 tag</h1>");

}
function get_input_from_user()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("passwrd").value;
    if(username!==password)
    {
        alert("The username and password are not same.");
    
    }
    var len= password.length;
    if(len<7)
    {
    alert("Password less than 7 figures are not allowed.");
    }
    if(username)
    {
    alert("welcome @"+username+"!");
    }
    else
    {
        alert("Enter username");
    }
}