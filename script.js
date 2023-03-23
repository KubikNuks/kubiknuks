
  



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
  
  
      
     //if (this.classList.contains('button-hover')) {
        //this.classList.add('button');
      //}
  
      var img = document.getElementById("spin-image");
      img.addEventListener("mouseover", function() {
        img.classList.add("rotate");
      });
      img.addEventListener("mouseout", function() {
        img.classList.remove("rotate");
      });
      
      const image = document.querySelector('.grow-on-hover');

image.addEventListener('mouseover', () => {
  image.classList.add('grow');
});

image.addEventListener('mouseout', () => {
  image.classList.remove('grow');
});
    



    // Get the square and projectile elements
const square = document.querySelector('.square');
const projectile = document.querySelector('.projectile');

// Add an event listener to the document to track mouse movement
document.addEventListener('mousemove', (event) => {
  // Move the square to the mouse position
  square.style.left = event.clientX + 'px';
  square.style.top = event.clientY + 'px';
});

// Add an event listener to the document to track mouse clicks
document.addEventListener('click', (event) => {
  // Position the projectile at the current mouse position
  projectile.style.left = event.clientX + 'px';
  projectile.style.top = event.clientY + 'px';
  // Show the projectile
  projectile.style.display = 'block';
  // Animate the projectile by moving it upward
  const projectileInterval = setInterval(() => {
    // Get the projectile's current position
    let top = parseInt(projectile.style.top);
    // If the projectile reaches the top of the screen, hide it and stop the animation
    if (top < 0) {
      projectile.style.display = 'none';
      clearInterval(projectileInterval);
    } else {
      // Otherwise, move the projectile upward by 10 pixels
      projectile.style.top = (top - 10) + 'px';
    }
  }, 50);
});


}

