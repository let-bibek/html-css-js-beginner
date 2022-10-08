//  string methods to manipulate text
function main()
{
    var len,UPPERCASE,lowercase,index, find_letter;
    var name=document.getElementById("firstlast").value;
    len=name.length;
    alert("The length of your name is "+len);
    UPPERCASE=name.toUpperCase();
    alert("The uppercase of your name is "+UPPERCASE);
    lowercase=name.toLowerCase();
    alert("The lowercase is "+lowercase);
    index=name.indexOf("i");
    alert("The index of first 'i' is "+index);
    find_letter=name.substring(0,3);
    alert("The letters from first to 3rd are: "+find_letter);

}