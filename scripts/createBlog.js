const user = window.localStorage.getItem('user')?window.localStorage.getItem('user'):location.replace('http://127.0.0.1:5500/pages/log-in.html')
const blog = {
    userId: user.userId,
    username: user.username,
    title:"",
    topic: "",
    difficulty: "",
    content: "",
}
const handleChange = (e) =>{
    blog.difficulty = e.target.value;
    console.log(blog);
}
const handleTitle = (e) =>{
    blog.title = e.target.value;
    console.log(blog);
}
const handleTopic = (e) =>{
    blog.topic = e.target.value;
    console.log(blog);
}
const handleContent = (e) =>{
    blog.content = e.target.value;
    console.log(blog);
}
const handleSubmit = () =>{
    fetch("http://localhost:3000/blog",{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
    .then(async response => {
        const blog = await response.json();
        if (!response.ok) {
            const error = (user && user.message) || response.status;
            return Promise.reject(error);
        }
        console.log(JSON.stringify(blog));
        
    })
    .catch(error => {
        console.log(JSON.stringify(error));
    })
}

document.getElementById("title").addEventListener("change",handleTitle);
document.getElementById("topic").addEventListener("change",handleTopic);
document.getElementById("content").addEventListener("change",handleContent);
document.getElementById("difficulty").addEventListener("click",handleChange);
document.getElementById("submitbtn").addEventListener("click",handleSubmit);
