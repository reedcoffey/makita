document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", `
     <nav class="nav">
      <a class="nav__home" href="index.html">Makita White</a>
      <a href="#" class="nav__hamburger">
        <span class="nav__hamburger__line"></span>
        <span class="nav__hamburger__line"></span>
        <span class="nav__hamburger__line"></span>
      </a>
      <div class="nav__menu">
        <ul>
          <li class="nav__menu__link"><a href="#about">About</a></li>
          <li class="nav__menu__link"><a href="#research">Research</a></li>
          <li class="nav__menu__link"><a href="#publications">Publications</a></li>
          <li class="nav__menu__link"><a href="media.html">Media</a></li>
          <li class="nav__menu__link"><a href="cv.html">CV</a></li>
        </ul>
      </div>
    </nav>
  `);
});
