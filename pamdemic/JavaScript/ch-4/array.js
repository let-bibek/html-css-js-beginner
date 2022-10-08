function name_reader()
{
    var name= prompt("Enter your name\n");
    alert(name);
    var n= name.length;
    alert(n);
    var new_arr = Array[10];
    new_arr=name;
    var i;
    var text="";
    for(i=0; i< n; i++)
    {
        text += new_arr[i] + "\n";
    }
    alert("Your name is:" + "\n" + text);
}