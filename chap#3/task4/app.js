function myfunction() {
    var email = "www.xyzClothing.com";

    var visitor = document.getElementById("vname").value;
    var v2 = document.getElementById("ptitle").value;

    var v1 = document.getElementById("quantity").value;

    document.getElementById("demo").innerHTML = visitor + " " + "ordered" + " " + v1 + " " +
        v2 + "" + "  on " + "" + email;
}