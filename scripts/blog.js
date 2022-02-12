const data = JSON.parse(localStorage.getItem("blog")).blogs;
const index = localStorage.getItem("current");
console.log(data);
document.querySelector(".tutorial-index").innerHTML =
  '<h2 class="title">'+data[index].title +'</h2>' +
  '<p class="author">Difficulty: '+data[index].difficulty +'</p><br><br>' +
  '<p class="topics">This Blog Covers : '+data[index].topic +'</p><br></br>' +
  '<p class="content">'+data[index].content+'</p><br><br>' +
  '<p class="author">Written By '+data[index].username +'</p><br>';
