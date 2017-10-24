function elixirBanner() {
  try {
    var divElixirBanner = document.getElementById('elixir-banner');
    if (divElixirBanner) {
      var defaultName = 'This',
          defaultDescription = 'This is part of the ELIXIR distributed infrastructure for life-science information.',
          basicStylingForNonfoundationSites = '',
          defaultColor = 'blue'; // options: orange, grey, green, blue

      if (typeof divElixirBanner.dataset.color !== "undefined") {
        defaultColor = divElixirBanner.dataset.color;
        defaultColor = (defaultColor == 'orange' ? 'rgb(244,125,32)' : defaultColor);
        defaultColor = (defaultColor == 'grey' ? 'rgb(77,77,72)' : defaultColor);
        defaultColor = (defaultColor == 'blue' ? 'rgb(190,191,50)' : defaultColor);
        defaultColor = (defaultColor == 'green' ? 'rgb(79,138,156)' : defaultColor);
      }
      if (typeof divElixirBanner.dataset.name !== "undefined") {
        defaultName = divElixirBanner.dataset.name;
      }
      if (typeof divElixirBanner.dataset.description !== "undefined") {
        defaultDescription = divElixirBanner.dataset.description;
      }
      if (divElixirBanner.dataset.useBasicStyles === 'true') {
        basicStylingForNonfoundationSites = `
          .elixir-ribbon {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }

          .elixir-ribbon .row {
            max-width: 1200px;
            margin: 0 auto 1rem;
          }

          .elixir-ribbon h5 {
            font-size: 1.3rem;
          }
        `;
      }

      var html = `
        <div id="elixir-ribbon" class="elixir-ribbon">
          <div class="row">
            <a href="#">
              <div class="elixir-logo-kite"></div>
              <h5>
                <span class="elixir-banner-name">`+defaultName+`</span> is part of the ELIXIR infrastructure
              </h5>
              <div id="elixir-banner-info">
                <small>
                  <span class="elixir-banner-description">`+defaultDescription+`</span>
                  <span class="readmore" href="#">Learn more &#8250;</span>
                </small>
              </div>
            </a>
          </div>
        </div>

        <style>
        .elixir-ribbon {
          padding: 1rem 0;
        }
        `+basicStylingForNonfoundationSites+`
        .elixir-ribbon,
        .elixir-ribbon h5,
        .elixir-ribbon a,
        .elixir-ribbon a:active,
        .elixir-ribbon a:hover {
          background-color: `+defaultColor+`;
          color: #fff;
          text-decoration: none;
        }
        .elixir-ribbon a:hover {
          opacity: .8;
        }
        .elixir-ribbon .readmore {
          border-bottom: 1px dotted #fff;
        }
        .elixir-ribbon h5 {
          margin: .5rem 0 0;
        }
        .elixir-ribbon .elixir-logo-kite {
          background: 80% 58% url("https://www.ebi.ac.uk/web_guidelines/EBI-Framework/v1.2/images/logos/assorted/elixir_kitemark-60px.png") no-repeat;
          position: relative;
          top: -5px;
          margin: 0 1rem -.5rem 0;
          height: 60px;
          width: 60px;
          display: inline-block;
          float: left;
        }
        </style>
      `;

      divElixirBanner.innerHTML = html;

      // try {
      // } catch (err) {
      //   setTimeout(init, 500);
      // }
    }
  }
  catch (err) {
    console.log(err)

  }
}

elixirBanner();
