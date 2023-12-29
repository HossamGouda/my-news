const sliderFetch = async () => {
  try {
    const response = await fetch("http://127.0.0.1:4010/slider");
    const data = await response.json();

    data.map((slide) => {
      const el = document.createElement("slider-component");
      el.setAttribute("src", slide.img_uri);
      el.setAttribute("text", slide.title);
      el.setAttribute("href", slide.link);
      // console.log(slide.img_uri,'/**/ ',slide.link,'/**/ ',slide.title)

      document.getElementById("carousel-inner").appendChild(el);
    });

    let slides = document.getElementsByClassName("carousel-item");
    slides[0].classList.add("active");
  } catch (error) {
    console.log(error);
  }
};

sliderFetch();
