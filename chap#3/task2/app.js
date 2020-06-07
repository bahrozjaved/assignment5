function noDisplay() {

    var count = localStorage.getItem("count") == null ? 1 : localStorage.getItem("count");
    count = Number(count) + 1;
    localStorage.setItem("count", count);
    alert("you have visited this site " + count + " times");
}