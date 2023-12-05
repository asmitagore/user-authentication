function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation and authentication here (dummy validation for the example)
    if (username == "asmita" && password == "asmita123") {
        document.getElementById("loginMessage").innerText = "Login successful!";
        window.location.href = "home.html";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid username or password";
    }
}

function register() {
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
    document.getElementById("registerMessage").innerText = "Registration successful!";
}
