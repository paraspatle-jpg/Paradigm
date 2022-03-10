window.onscroll = () => {
    if(window.scrollY != 0){
    document.getElementById("nav-container").style.flexDirection="row";
    document.getElementById("nav-container").style.position="fixed";
    
    }
    else{
      document.getElementById("nav-container").style.flexDirection="column";
      document.getElementById("nav-container").style.position="sticky";
    }
  }