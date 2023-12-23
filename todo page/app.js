let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", fun);
function fun() {
    let item = document.createElement("li");
    let del = document.createElement("button");
    del.innerText = "Delete Task!";
    del.classList.add("delete");
    console.log(del.classList);
    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(del);
    inp.value = "";
}

ul.addEventListener("click", function (event) {
    if(event.target.nodeName = "BUTTON") {
        let list = event.target.parentElement;
        list.remove();
    }
});