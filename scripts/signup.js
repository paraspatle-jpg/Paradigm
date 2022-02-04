const details = {
    email: "",
    password: "",
    username: "",
}
document.getElementById("emailId").value = details.email
document.getElementById("username").value = details.username
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

const handleSignUp = () => {
    if (details.email && details.password && details.username) {
        console.log("a")
        fetch("http://localhost:3000/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: details.username, email: details.email, password: details.password })
        })
            .then(async response =>{
                const user = await response.json();
                if (!response.ok) {
                    const error = (user && user.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(JSON.stringify(user));
            })
            .catch(err => {
                console.log(JSON.stringify(err));
            })
    }
    else {
        document.getElementById("warning").innerText = "Please enter All Fields";
    }
}
document.getElementById("emailId").addEventListener("change", handleChangeEmail);
document.getElementById("password").addEventListener("change", handleChangePassword)
document.getElementById("username").addEventListener("change", handleChangeUserName);
document.getElementById("signupbtn").addEventListener("click", handleSignUp);
