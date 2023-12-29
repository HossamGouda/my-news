import {API_URL} from "../urls.js";
const sliderFetch = async () => {
  try {
    const response = await fetch(`${API_URL}slider`);
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

const sideHeadrArticlefetch = async () => {
  try {
    const response = await fetch(`${API_URL}header-articles`);
    const data = await response.json();

    data.map((article) => {
      const el = document.createElement("side-article");
      el.setAttribute("src", article.img_uri);
      el.setAttribute("text", article.title);
      el.setAttribute("href", article.link);
      el.setAttribute("category", article.category);

      document.getElementById("header-articles").appendChild(el);
    });

    // let slides = document.getElementsByClassName("header-articles");
    // slides[0].classList.add("active");
  } catch (error) {
    console.log(error);
  }
};

const newsArticlefetch = async () => {
  try {
    const response = await fetch(`${API_URL}news`);
    const data = await response.json();

    data.map((article) => {
      const el = document.createElement("article-component");
      el.setAttribute("title", article.title);
      el.setAttribute("src", article.img_uri);
      el.setAttribute("href", article.link);
      el.setAttribute("category", article.category);
      el.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mt-4");

      document.getElementById("news").appendChild(el);
    });

    // let slides = document.getElementsByClassName("header-articles");
    // slides[0].classList.add("active");
  } catch (error) {
    console.log(error);
  }
};

const mostReadCardFetch = async () => {
  try {
    const response = await fetch(`${API_URL}most-read`);
    const data = await response.json();

    for (let i = 0; data.length; i++) {
      if (i % 2 == 0) {
        const el = document.createElement("most-read-card");
        el.setAttribute("text", data[i].title);
        el.setAttribute("src", data[i].img_uri);
        el.setAttribute("href", data[i].link);
        el.setAttribute("excerpt", data[i].paragraph);
        el.setAttribute(
          "datetime",
          moment(parseInt(data[i].date)).format("dddd") +
            " , " +
            moment(parseInt(data[i].date)).format("LL")
        );

        document.getElementById("most-read").appendChild(el);
      } else {
        const el = document.createElement("big-most-read-card");
        el.setAttribute("text", data[i].title);
        el.setAttribute("src", data[i].img_uri);
        el.setAttribute("href", data[i].link);
        el.setAttribute(
          "datetime",
          moment(parseInt(data[i].date)).format("dddd") +
            " , " +
            moment(parseInt(data[i].date)).format("LL")
        );

        document.getElementById("most-read").appendChild(el);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

sliderFetch();
sideHeadrArticlefetch();
newsArticlefetch();
mostReadCardFetch();
