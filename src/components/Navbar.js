class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header class="bg-[#AA0601]">
      <nav
        class="flex flex-row justify-between items-center max-w-screen-xl mx-auto p-5 w-screen"
      >
        <div class="flex">
          <a href="/">
            <img class="w-16" src="/public/images/logo-white.png" alt="logo" />
          </a>
        </div>
        <div class="flex">
          <ul class="flex flex-row space-x-15 text-white">
            <li><a href="/course">系列課程</a></li>
            <li><a href="/location">門市據點</a></li>
            <li><a href="/blog">部落格</a></li>
            <li><a href="/problem">常見問題</a></li>
          </ul>
        </div>
      </nav>
    </header>
    `;
  }
}

export default Navbar;
