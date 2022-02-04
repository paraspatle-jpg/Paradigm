const details = {
    email: "",
    password: ""
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
            .then(async response => {
                const user = await response.json();
                if (!response.ok) {
                    const error = (user && user.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(JSON.stringify(user));
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            })
    }
    else {
        console.log("a");
        document.getElementById("warning").innerText = "Please enter All Fields";
    }
}
document.getElementById("emailId").addEventListener("change", handleChangeEmail);
document.getElementById("password").addEventListener("change", handleChangePassword)
document.getElementById("submitbtn").addEventListener("click", handleLogin);
