
setTimeout(function () {
    document.getElementById("intro").classList.add("active");

}, 1);

function navbar(el) {
    el = document.getElementById(el);
    console.log("element clicked!!!!")
    Array.from(document.getElementsByClassName("navelement")).forEach(element => {
        element.classList.remove("active");
    });
    el.classList.add("active");
}