function id(e){return document.getElementById(e);}

let dropdown = {
  element: id("dropdown"),
  links: document.getElementsByClassName("dropdown-link"),
  btn: id("dropdown-btn"),
  open: function() {
    this.element.style.display = "block";
  },
  close: function() {
    this.element.style.display = "none";
  },
  init: function() {
    this.element.style.display = "none";
    
    for(let i = 0; i < this.links.length; i++) {
      dropdown.links[i].addEventListener("click", ()=>{dropdown.close()});
    }
    
    this.btn.addEventListener("click", function(){
      if(dropdown.element.style.display == "none") {
        dropdown.open();
      } else {
        dropdown.close();
      }
    })
  }
}

dropdown.init();