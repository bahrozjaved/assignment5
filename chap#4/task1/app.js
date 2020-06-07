var ab, bc, cd;
ab = "numbers"
bc = "_"
cd = "&"
    // 5 legal vairalble 
var a, b, c, d, e;
a = "$name";
b = "name";
c = "_name";
d = "sensitive";
e = "keywords";


//5 illegal variables because it is reserved keywords
var document, write, abstract, double, input;

document.getElementById("demo").innerHTML = "A heading stating Rules for naming JS variables ";

document.getElementById("demo1").innerHTML = "Variable names can only contain  " +
    ab + "," + cd + "and " + bc + "  " + "For example $my_1stVariable <br>";
document.getElementById("demo2").innerHTML = "Variables must begin with a " +
    a + ", " + b + " or" + c + " ." + "For example $name, _name or name <br> ";
document.getElementById("demo3").innerHTML = "Variable names are case " + d + "<br>";
document.getElementById("demo4").innerHTML = "Variable names should not be JS " + e;