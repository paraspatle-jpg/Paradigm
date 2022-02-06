fetch("http://localhost:3000/blog",{
    method: 'GET',
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
    window.localStorage.setItem('blog',JSON.stringify(blog) )
    
})
.catch(error => {
    console.log(JSON.stringify(error));
})