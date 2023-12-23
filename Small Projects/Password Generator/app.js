let button = document.querySelector(".pass");
let password = document.querySelector("#pass");

button.addEventListener("click", () => {
    let out = pass();
    password.value = out;
    console.log(out);
});

function pass() {
    let genpass = '';
    for (let i = 0; i < 8 ; i++) {
        let num = Math.floor(Math.random()*(94) + 33);
        let rand = String.fromCharCode(num);
        genpass = genpass + rand;
    }
    return genpass;
}