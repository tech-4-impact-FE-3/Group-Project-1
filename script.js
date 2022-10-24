const signUp = e => {
    let username = document.getElementById('username').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;

        let formData = JSON.parse(localStorage.getItem('formData')) || [];

        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.username.toLowerCase() == username.toLowerCase()
        );

        if(!exist){
            formData.push({ username, email, password });
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('username').focus();
            alert("Account Created.\n\nPlease Login!");
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