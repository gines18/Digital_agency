import React from "react";
import "./Article.css";

function Article() {
  return (
    <>
      <div className="card-coffee">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">
              Enjoy the Perfect Cup of Coffee with Our Exquisite Blends
            </h5>
            <p class="card-text">
              Indulge in the rich aroma and bold flavors of our meticulously
              crafted coffee blends. Our collection features a wide range of
              premium beans sourced from around the world. Whether you prefer a
              smooth and velvety brew or a strong and robust cup, our expertly
              roasted coffees will satisfy your taste buds. Immerse yourself in
              the delightful experience of savoring the perfect cup of coffee
              with our carefully curated selection
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
          <img src="./logo.png" class="card-img-bottom" alt="..."></img>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">
              Savor the Rich Aroma and Delightful Flavors of Our Artisanal
              Coffee Collection
            </h5>
            <p class="card-text">
              Experience coffee perfection with our meticulously crafted
              artisanal coffee collection. Each batch is carefully roasted to
              bring out the enticing aroma and distinctive flavors that coffee
              enthusiasts crave. From velvety smooth blends to bold and robust
              single origins, our handpicked beans from around the world
              guarantee a captivating sensory journey. Indulge in the pleasure
              of every sip as you discover the true essence of exceptional
              coffee craftsmanship.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
          <img src="./logo.png" class="card-img-bottom" alt="logo-name"></img>
        </div>
      </div>
<div className="header-text">
      <h4>
        Unveiling the Secrets of Coffee: A Journey into the World's Most Loved
        Beverage
      </h4>
      </div>

      <div className="container-article">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Introduction:
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Coffee, the enchanting elixir that ignites our senses and fuels
                our mornings, holds a captivating story waiting to be savored.
                Beyond its aromatic allure and energizing properties, this
                beloved beverage hides a rich tapestry of history, culture, and
                science. Join us as we embark on a tantalizing journey to
                uncover the secrets of coffee and explore why it has become a
                ubiquitous companion in our daily lives.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                The Origins:
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                From the mystical Ethiopian highlands to the bustling
                coffeehouses of Europe, the origins of coffee are steeped in
                legend and folklore. Discover the captivating tales of how a
                humble coffee bean transformed into a global phenomenon,
                transcending borders and bridging cultures.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                The Art of Brewing:
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Step into the world of coffee craftsmanship, where the brewing
                process becomes an art form. Delve into the diverse techniques
                and methods employed to extract the perfect cup of Joe. From
                traditional methods like the Turkish ibrik and Italian espresso
                to the innovative approaches of pour-over and cold brew, unlock
                the secrets of brewing mastery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
