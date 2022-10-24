let loginForm = document.querySelector("#sign-in")
let inputUsername = document.querySelector("#username")
let inputPassword = document.querySelector("#password")

let user = {
    username : "deva",
    password : "12345"
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(inputUsername.value);
    console.log(inputPassword.value);
    let userLogin = {
        username : inputUsername.value,
        password : inputPassword.value
    }
    console.log(userLogin);

    let login = userLogin.username == user.username && userLogin.password == user.password

    if (login) {
        console.log("Selamat anda berhasil login!");
        alert("Selamat anda berhasil login!");
    } else {
        console.log("username atau password salah");
        alert("username atau password salah")
    }
    loginForm.reset()
})