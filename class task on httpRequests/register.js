function getData(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let country = document.querySelector("#country").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;
    let gender = document.querySelector("input[name='gender']:checked").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (!name || !email || !phone || !country || !password || !confirmPassword) {
        alert("Please fill all the fields.");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Enter a valid email.");
        return;
    }

    if (!phone.match(phonePattern)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    if (!password.match(passwordPattern)) {
        alert("Password must include uppercase, lowercase, number, special char, 8–20 chars.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }else{
        signUp(name, email,password)
        alert("Registration Successful!");
    }

    console.log({
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        country: country,
        password: password
    });
}

function signUp(name , email, password) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/signup"); 
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        console.log("Response:", JSON.parse(xhr.responseText));
    };
    const body = {
        fullname:name,
        email: email,
        password: password,
    };
    xhr.send(JSON.stringify(body));
}






