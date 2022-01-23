const details = {
    email:"",
    password:"",
    name:"",
}
document.getElementById("emailId").value = details.email
document.getElementById("password").value = details.password

const handleChangeEmail = (e) =>{
    details.email = e.target.value;
    console.log(details);
}
const handleChangePassword = (e) =>{
    details.password = e.target.value;
    console.log(details);
}
const handleChangeName = (e) =>{
    details.name = e.target.value;
}
const handleLogin= () =>{
    if(details.email||details.password){
        fetch("https://localhost:5000/login",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: details.email,password: details.password})
        })
    }
}
document.getElementById("emailId").addEventListener("change", handleChangeEmail);
document.getElementById("username").addEventListener("change", handleChangeName);
document.getElementById("password").addEventListener("change", handleChangePassword)
document.getElementById("submitbtn").addEventListener("click", handleLogin)