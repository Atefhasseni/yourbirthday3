let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  // Get all elements with the class 'slide'
  let slides = document.getElementsByClassName("slide");
  
  // 1. Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // 2. Advance the index
  slideIndex++;
  
  // 3. Reset the index if it goes past the last slide (creating a loop)
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  
  // 4. Display the current slide (slideIndex - 1 because array index starts at 0)
  slides[slideIndex-1].style.display = "block";  
  
  // 5. Call this function again after 7000 milliseconds (7 seconds)
  setTimeout(showSlides, 7000); 
}
