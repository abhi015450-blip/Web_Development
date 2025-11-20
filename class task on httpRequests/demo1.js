function getData() {
    // let email = document.getElementById('email').value;
    // let password = document.getElementById('password').value;
    let email = $('#email').val();
    let password = $('#password').val();

    console.log("Email: " + email + " Password: " + password);

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (email === "" || password === "") {
        alert("Please fill all the fields");

    } else if (!email.includes("@")) {
        alert("Please enter a valid email");

    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email");

    } else if (!passwordPattern.test(password)) {
        alert("Password must be 7-15 characters long and include at least one numeric digit and a special character");

    } else {
        login(email, password);
    }
}

function login(email, password) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/login"); 
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        console.log("Response:", JSON.parse(xhr.responseText));
    };
    const body = {
        email: email,
        password: password,
    };
    xhr.send(JSON.stringify(body));
}

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:3000/login&quot;);
// xhr.onload = function() {
// if (xhr.status === 200) {
// const data = JSON.parse(xhr.responseText);
// console.log("Received:", data);
// }
// };
// xhr.send();