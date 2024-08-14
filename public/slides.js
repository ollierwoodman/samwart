function placeSlides(images, duration_seconds) {
  let slideIndex = 0;

  const slideshow = document.getElementById("slideshow")

  images.map((image, index) => {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", image.file);
    newImage.setAttribute("class", "absolute object-cover w-full h-full object-center transition ease-in-out duration-1000 transition-opacity opacity-0 aria-[current=true]:opacity-100 motion-reduce:transition-none");
    newImage.setAttribute("title", image.alt);
    newImage.setAttribute("width", image.width);
    newImage.setAttribute("height", image.height);
    newImage.setAttribute("aria-current", "false");
    slideshow.appendChild(newImage);
  })

  nextSlide();

  function nextSlide() {
    let slides = document.getElementById("slideshow").children;
    
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      const ariaCurrentValue = i === slideIndex ? "true" : "false";
      slides[i].setAttribute("aria-current", ariaCurrentValue);
    }
    setTimeout(nextSlide, duration_seconds * 1000); // Change image every 2 seconds
  }
}

placeSlides(
  [
    {
      "file": "./assets/slideshow/1.JPG",
      "alt": "",
      "width": "400px",
      "height": "400px"
    },
    {
      "file": "./assets/slideshow/3.JPG",
      "alt": "",
      "width": "400px",
      "height": "400px"
    },
    {
      "file": "./assets/slideshow/7.JPG",
      "alt": "",
      "width": "400px",
      "height": "400px"
    },
    {
      "file": "./assets/slideshow/8.JPG",
      "alt": "",
      "width": "400px",
      "height": "400px"
    },
    {
      "file": "./assets/slideshow/11.JPG",
      "alt": "",
      "width": "400px",
      "height": "400px"
    }
  ],
  6
);