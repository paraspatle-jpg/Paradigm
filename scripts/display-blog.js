const handleCurrent = (index) => {
  localStorage.setItem("current", index);
  console.log(JSON.parse(localStorage.getItem("blog")).blogs[index]);
  window.location.replace("./blog.html");
};

const display = () => {
  const data = JSON.parse(localStorage.getItem("blog")).blogs;
  document.getElementsByClassName("tutorial-index")[0].innerHTML = "";
  data.map((blogData, index) => {
    document.getElementsByClassName("tutorial-index")[0].innerHTML =
      document.getElementsByClassName("tutorial-index")[0].innerHTML +
      '<div class="tutorial-wrapper"><div class="tutorial-content-wrapper"><span class="tutorial-title">' +
      blogData.title +
      '</span><br /><div class="difficulty">Difficulty : ' +
      blogData.difficulty +
      ' </span><br /><span class="topics"> Topics : ' +
      blogData.topic +
      '</span><br /><br /><div class="submit" onclick="handleCurrent(' +
      index +
      ')"><a id="submitbtn">Read</a></div></div>';
  });
};

const handleAllTut = () => {
  var e = document.getElementById("all-tutorial");
  var selected = document.getElementById("my-tutorial");
  e.classList.add("active");
  selected.classList.remove("active");
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
      console.log("a");
      localStorage.setItem("blog", JSON.stringify(blog));
      display();
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
      if (!localStorage.getItem("blog")) {
        document.getElementsByClassName("tutorial-index")[0].innerHTML =
          '<h1 style="color:white">Loading Failed, Please Reload</h1>';
      } else {
        display();
      }
    });
};

handleAllTut();

document.querySelector(".all-tutorial").addEventListener("click", handleAllTut);
document.querySelector(".add-tut").onclick = (e) => {
  console.log("a");
  window.location.replace("./create-tut.html");
};
document.querySelector(".my-tutorial").onclick = (e) => {
  var selected = document.getElementById("all-tutorial");
  e.target.classList.add("active");
  selected.classList.remove("active");

  if (localStorage.getItem("user")) {
    const data = JSON.parse(localStorage.getItem("blog")).blogs;
    document.getElementsByClassName("tutorial-index")[0].innerHTML = "";
    data.map((blogData, index) => {
      if (blogData.userId === localStorage.getItem("user").userId) {
        document.getElementsByClassName("tutorial-index")[0].innerHTML =
          document.getElementsByClassName("tutorial-index")[0].innerHTML +
          '<div class="tutorial-wrapper"><div class="tutorial-content-wrapper"><span class="tutorial-title">' +
          blogData.title +
          '</span><br /><div class="difficulty">Difficulty : ' +
          blogData.difficulty +
          ' </span><br /><span class="topics"> Topics : ' +
          blogData.topic +
          '</span><br /><br /><div class="submit"><a id="submitbtn" onclick="handleCurrent(' +
          index +
          ')">Read</a></div></div>';
      }
    });
  } else {
    document.getElementsByClassName("tutorial-index")[0].innerHTML =
      "<h1 style='color: white'>Please Login First</h1>";
  }
};
