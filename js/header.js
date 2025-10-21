// include.js

// 1. Inject the header HTML
const headerHTML = `
  <nav class="nav" style="position: fixed; z-index: 10; width: 100%; background-color: rgb(27, 86, 43); top: 0;">
    <div class="nav__logo">Logo</div>
    <a href="#" class="nav__hamburger">
      <span class="nav__hamburger__line"></span>
      <span class="nav__hamburger__line"></span>
      <span class="nav__hamburger__line"></span>
    </a>
    <div class="nav__menu">
      <ul>
        <li class="nav__menu__link"><a href="research.html">Research</a></li>
        <li class="nav__menu__link"><a href="publications.html">Publications</a></li>
        <li class="nav__menu__link"><a href="media.html">Media</a></li>
        <li class="nav__menu__link"><a href="cv.html">CV</a></li>
      </ul>
    </div>
  </nav>
  <div class="bg"></div>
`;

document.getElementById('header-placeholder').innerHTML = headerHTML;

// 2. Initialize the hamburger menu logic after injection
function initMenuScript() {
  const hamburger = document.querySelector(".nav__hamburger");
  const linksContainer = document.querySelector(".nav__menu");
  const links = document.querySelectorAll(".nav__menu__link");

  if (!hamburger || !linksContainer || links.length === 0) {
    console.warn("Navigation menu elements not found.");
    return;
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default <a href="#">
    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when a nav link is clicked (mobile)
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Close menu on window resize under 550px
  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 550px)").matches) {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Initial check on page load
  if (window.matchMedia("(max-width: 550px)").matches) {
    linksContainer.classList.remove("active");
    hamburger.classList.remove("active");
  }
}

// 3. Run the init function after DOM updates
setTimeout(initMenuScript, 0);
