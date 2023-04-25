

var myIndex = 0;
carousel();//calling func

function carousel() {
    var x = document.getElementsByClassName("slides");
    for (var i = 0; i < x.length; i++) {//looping over the len of slides ie no of img
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}


//scroll function
//shop button
function scrollfunshop() {
    window.scrollTo(0, findposfunc(document.getElementById("section2")));
}
//our product button
function scrollfunproduct() {
    window.scrollTo(0, findposfunc(document.getElementById("section2")));
}
//contact button
function scrollfuncontact() {
    window.scrollTo(0, findposfunc(document.getElementById("footer0")));
}
function findposfunc(id) {
    var currenttop = 0;
    if (id.offsetParent) {
        do {
            currenttop += id.offsetTop;
        } while ((id = id.offsetParent));
        return [currenttop];
    }
}
let num=0;
let a={1:6}
function test() {

    let x=document.getElementById('test1');
    x.innerHTML=num;
    num=num+1;
}
