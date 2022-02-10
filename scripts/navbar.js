window.onscroll = () => {
    if(window.scrollY != 0){
    console.log('a')
    document.getElementById("nav-container").style.flexDirection="row";
    document.getElementById("nav-ul").style.backgroundColor="rgb(32, 30, 30)";
    document.getElementById("nav-container").style.position="fixed";
    
    }
    else{
      document.getElementById("nav-container").style.flexDirection="column";
      document.getElementById("nav-ul").style.backgroundColor="rgb(87, 85, 85)";
    document.getElementById("nav-container").style.position="sticky";
    }
  }