if(window.localStorage.getItem('user')){
  document.getElementById("login").innerHTML="<a onclick='window.localStorage.removeItem(\"user\"); location.reload();' style='cursor:pointer'>Logout</a>"
  document.getElementById("signup").innerHTML=""
}
