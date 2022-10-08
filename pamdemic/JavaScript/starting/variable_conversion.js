function convertor()
{
    var get_input;
    get_input=document.getElementById("firstlast").value;
        // prints anything into integer-advanced
    var integer=parseInt(get_input);
    if(get_input!=integer)
    {
        alert("This is the integer value of "+get_input+" is "+parseInt(get_input));
    }
    else
    {
        alert("This is already an integer.")
    }
    // conversion to float
    var float= parseFloat(get_input);
    alert(float);
    if(float)
    {
        alert("This is the float value of "+get_input+" is "+parseFloat(get_input));
    }
    else
    {
        alert("This is already a float.");
    }
}