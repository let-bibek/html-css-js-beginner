var output;
function chorus() {
var text = "...and they all go marching down <br />";
text += "to the ground <br />";
text += "to get out <br />";
text += "of the rain. <br />";
text += " <br />";
text += "boom boom boom boom boom boom boom boom <br /><br />";
output.innerHTML += text;
} // end chorus
function verse1(){
var text = "The ants go marching 1 by 1 hurrah, hurrah <br />";
text += "The ants go marching 1 by 1 hurrah, hurrah <br />";
text += "The ants go marching 1 by 1 <br />";
text += " The little one stops to suck his thumb <br /><br />";
output.innerHTML += text;
} // end verse1
function verse2(){
var text = "The ants go marching 2 by 2 hurrah, hurrah <br />";
text += "The ants go marching 2 by 2 hurrah, hurrah <br />";
text += "The ants go marching 2 by 2 <br />";
text += " The little one stops to tie his shoe <br /><br />";
output.innerHTML += text;
} // end verse2
function makeSong(){ 
output = document.getElementById("output");
output.innerHTML = "";
verse1();
chorus();
verse2();
chorus();

} // end makeSong
// this finction gets the input from the user
function get_number()
{
    var f=0;
  var original =  prompt("Multiplication of what number?\n");
  var g =parseInt(prompt("Upto what?"));
  var m= parseInt(original);
 var original_choice = m;
  main(original_choice, g);
}
// this function calls the multiplication function
function main(original_choice, g )
{ 
    var n = g;
    var choice = original_choice;
    multiplication(choice, n);
}
// this function returns the original multiplication
function multiplication(original_choice, n)
{
    var N=n;
    var number;result="";
    number = original_choice;
    var i;
    for(i=1; i<=N; i++)
    {
        // result += i*number;
        result += number +  'x' + i + ' = ' + ( i * number );
        // alert(result);
        // multiplication.innerHTML = " ";
        // multiplication.innerHTML = result;
        // multiplication.innerHTML += "<br />";
        // multiplication.innerHTML += result;
        // multiplication.innerHTML=result;
        result += '  ';
    }
    var multiplication=document.getElementById("multiplication");
    multiplication.textContent=' ' + result 
   
    // multiplication.innerHTML = "randiko xoro\n";
    
}
