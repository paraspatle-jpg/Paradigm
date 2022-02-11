if (!localStorage.getItem("blog")) {
  console.log(document.getElementsByClassName("tutorial-index")[0]);
  document.getElementsByClassName("tutorial-index")[0].innerHTML =
    '<h1 style="color:white">Loading....</h1>';
  fetch("http://localhost:5000/blog", {
    method: "GET",
    mode: "cors",
  })
    .then(async (response) => {
      const blog = await response.json();
      if (!response.ok) {
        const err = (blog && blog.message) || response.status;
        return Promise.reject(err);
      }
      window.localStorage.setItem("blog", JSON.stringify(blog));
      const data = [
        { topics: "Paras", title: "Paras Patle", difficulty: "Hard" },
        { topics: "Paras", title: "Paras Patle", difficulty: "Hard" },
        { topics: "Paras Patle", title: "Paras Patle", difficulty: "Hard" },
      ];
      document.getElementsByClassName("tutorial-index")[0].innerHTML="";
      data.map((blogData, index) => {
        document.getElementsByClassName("tutorial-index")[0].innerHTML = document.getElementsByClassName("tutorial-index")[0].innerHTML +
          '<div class=\"tutorial-wrapper\"><div class=\"tutorial-content-wrapper\"><span class=\"tutorial-title\">' +blogData.title +'</span><br /><div class=\"difficulty\">Difficulty : ' +blogData.difficulty +' </span><br /><span class=\"topics\"> Topics : ' +blogData.topics +'</span><br /><br /><div class=\"submit\"><a id=\"submitbtn\">Read</a></div></div>';
      });
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
      document.getElementsByClassName("tutorial-index")[0].innerHTML =
        '<h1 style="color:white">Loading Failed, Please Reload</h1>';
    });
}

else{
    const data = localStorage.getItem('blog');
    document.getElementsByClassName("tutorial-index")[0].innerHTML="";
      data.map((blogData, index) => {
        document.getElementsByClassName("tutorial-index")[0].innerHTML = document.getElementsByClassName("tutorial-index")[0].innerHTML +
          '<div class=\"tutorial-wrapper\"><div class=\"tutorial-content-wrapper\"><span class=\"tutorial-title\">' +blogData.title +'</span><br /><div class=\"difficulty\">Difficulty : ' +blogData.difficulty +' </span><br /><span class=\"topics\"> Topics : ' +blogData.topics +'</span><br /><br /><div class=\"submit\"><a id=\"submitbtn\">Read</a></div></div>';
      });
}



document.querySelector(".all-tutorial").onclick = (e) => {
    var selected = document.getElementById("my-tutorial");
    e.target.classList.add("active")
    selected.classList.remove("active")

    const data = localStorage.getItem('blog');
    document.getElementsByClassName("tutorial-index")[0].innerHTML="";
      data.map((blogData, index) => {
        document.getElementsByClassName("tutorial-index")[0].innerHTML = document.getElementsByClassName("tutorial-index")[0].innerHTML +
          '<div class=\"tutorial-wrapper\"><div class=\"tutorial-content-wrapper\"><span class=\"tutorial-title\">' +blogData.title +'</span><br /><div class=\"difficulty\">Difficulty : ' +blogData.difficulty +' </span><br /><span class=\"topics\"> Topics : ' +blogData.topics +'</span><br /><br /><div class=\"submit\"><a id=\"submitbtn\">Read</a></div></div>';
      });

}
document.querySelector(".my-tutorial").onclick = (e) => {
    var selected = document.getElementById("all-tutorial");
    e.target.classList.add("active")
    selected.classList.remove("active")

    const data = localStorage.getItem('blog');
    document.getElementsByClassName("tutorial-index")[0].innerHTML="";
      data.map((blogData, index) => {
        if(blogData.userId === localStorage.getItem('user').userId){
            document.getElementsByClassName("tutorial-index")[0].innerHTML = document.getElementsByClassName("tutorial-index")[0].innerHTML +
            '<div class=\"tutorial-wrapper\"><div class=\"tutorial-content-wrapper\"><span class=\"tutorial-title\">' +blogData.title +'</span><br /><div class=\"difficulty\">Difficulty : ' +blogData.difficulty +' </span><br /><span class=\"topics\"> Topics : ' +blogData.topics +'</span><br /><br /><div class=\"submit\"><a id=\"submitbtn\">Read</a></div></div>';
        }
      });
}
