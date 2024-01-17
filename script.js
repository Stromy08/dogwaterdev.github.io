function navbar(el) {
    el = document.getElementById(el);
    console.log("element clicked!!!!")
    Array.from(document.getElementsByClassName("navelement")).forEach(element => {
        element.classList.remove("active");
    });
    el.classList.add("active");
}