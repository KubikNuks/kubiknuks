
  



window.onload = function() {
    var link = document.getElementsByTagName("a")[0];
  
    link.addEventListener('mouseover', function() {
      if (this.classList.contains('button-hover')) {
        this.classList.remove('button-hover');
        this.classList.add('button');
      } else {
        this.classList.remove('button');
        this.classList.add('button-hover');
      }
    });
}
  
      
  





