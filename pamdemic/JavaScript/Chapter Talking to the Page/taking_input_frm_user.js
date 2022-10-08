function Interaction() {
    var i;
    var Name = document.getElementById("txtIn");
    var name=Name.value;
 var txtOut = document.getElementById("txtOut");
 var out= txtOut.value;
//  using condition making statements like if/else statements
 if(Name.lenght!=0)
 {
 txtOut.value = "Hi there, " + name + "!"
 }
 if(out)
 {
     Name.value= "Hi there, " + out + "!"
 }
}
// Using innerHTML
function Get_name() {
    var name=document.getElementById("innerhtml2").value;
    var output=document.getElementById("out");
    var pass=document.getElementById("pwd").value;
    var outt=document.getElementById("txtarea");
    var  result= "";
    result +=  "Name:   " ;
    result +=  name + " " ;
    result += " Password:   " ;
    result +=  pass ;
    if(pass.length < 8)
    {
    output.innerHTML = "<em>"  + "Password " +  "</em>";
    output.innerHTML += " is very short.";
    // This changes the background color of #innerhtml
    document.getElementById("out").style.color="coral";
    }
    else
    {
    output.innerHTML = "<em>"  + name +  "</em>";
    output.innerHTML += " is very nice name.";
    document.getElementById("innerhtml").style.backgroundColor="black";
    document.getElementById("innerhtml").style.color="skyblue";
    

    }

    outt.value = result;

}
function jpt()
{
    // var temp=document.getElementById("temp").value;
    var temp2=document.getElementsByTagName("p");
    temp2.innerHTML="";
    temp2.value="lund";
}
// password check using while loop
function password_check()
{
    var  true_cond,count;
    // true_cond=true;
    var user_password=document.getElementById("user_password").value;
    alert(user_password);
    while(true_cond==true)
    {   if(user_password=="hello")
        {
            alert("You may procceed.\n");
            true_cond=false;
        }
        else
        {
            count++;
            if(count>=3)
            {
                prompt("Wrong password. Please enter your password again.\n");
                true_cond=false;
            }
        }
    }
}


