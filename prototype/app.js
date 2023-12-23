let body = document.querySelector("body");
let icon = document.querySelector("#icon");
let container = document.querySelector(".container");
let inp = document.querySelector("#inp");
let ul = document.createElement("ul");

container.prepend(ul);
icon.addEventListener("click" , task);
function task() {
    let li = document.createElement("li");
    let cross = document.createElement("i");
    
    li.classList.add("list");
    cross.classList.add("fa-solid","fa-plus", "rot");

    li.innerText = inp.value;
    ul.appendChild(li);
    li.appendChild(cross);
    inp.value = "";

    let dele = document.querySelectorAll(".rot")
    for (del of dele) {
        del.addEventListener("click", function () {
            let par = this.parentElement;
            par.remove();
        });
}
};

