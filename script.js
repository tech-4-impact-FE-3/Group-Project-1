const signUp = e => {
    let username = document.querySelector('#username').value,
        email = document.querySelector('#email').value,
        password = document.querySelector('#password').value;

        let formData = JSON.parse(localStorage.getItem('formData')) || [];

        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.username.toLowerCase() == username.toLowerCase()
        );

        if(!exist){
            formData.push({ username, email, password });
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.querySelector('#username').focus();
            alert("Account Created.\n\nPlease Sign In using the link below.");
        }
        else{
            alert("Ooopps... Duplicate found!!!\nYou have already signed up");
        }
        e.preventDefault();
}

function signIn(e) {
    let username = document.getElementById('username').value, 
        password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.username.toLowerCase() == username && data.password.toLowerCase() == password);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "./dasboard.html";
    }
    e.preventDefault();
}