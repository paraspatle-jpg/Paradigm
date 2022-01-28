const details = {
    email: "",
    password: "",
    username: "",
}
document.getElementById("emailId").value = details.email
document.getElementById("password").value = details.password

const handleChangeEmail = (e) => {
    details.email = e.target.value;
    console.log(details);
}
const handleChangePassword = (e) => {
    details.password = e.target.value;
    console.log(details);
}
const handleChangeUserName = (e) => {
    details.username = e.target.value;
}
const handleLogin = () => {
    if (details.email && details.password) {
        fetch("http://localhost:3000/login", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: details.email, password: details.password })
        })
            .then(response => {
                console.log(response.data);
            })
    }
    else {
        console.log("a");
        document.getElementById("warning").innerText = "Please enter All Fields";
    }
}

const handleSignUp = () => {
    if (details.email && details.password && details.name) {
        fetch("http://localhost:3000/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: details.username, email: details.email, password: details.password })
        })
            .then(response => {
                console.log(response.data);
            })
    }
    else {
        document.getElementById("warning").innerText = "Please enter All Fields";
    }
}
document.getElementById("emailId").addEventListener("change", handleChangeEmail);
document.getElementById("password").addEventListener("change", handleChangePassword)
document.getElementById("submitbtn").addEventListener("click", handleLogin)
document.getElementById("username").addEventListener("change", handleChangeUserName)