const mostReadCard = `    
<div class="card-news">
<a href="">
  <div class="row">
    <div class="col-md-5">
      <img src="" alt="..." />
    </div>
    <div class="col-md-7">
      <div class="card-text">
        <h4>
          
        </h4>
        <p>
        </p>
        <time datetime=""> </time>
      </div>
    </div>
  </div>
</a>
</div>`;

class MostReadCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    try {
      this.innerHTML = mostReadCard;
      this.querySelector("h4").innerText = this.getAttribute("text");
      this.querySelector("p").innerText = this.getAttribute("excerpt");
      this.querySelector("img").setAttribute("src", this.getAttribute("src"));
      this.querySelector("a").setAttribute("href", this.getAttribute("href"));
      this.querySelector("time").innerHTML = this.getAttribute("datetime");
      this.querySelector("time").setAttribute(
        "datetime",
        this.getAttribute("datetime")
      );

    } catch (error) {
      console.log(error);
    }
  }
}

window.customElements.define("most-read-card", MostReadCard);
