class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header class="bg-[#AA0601]">
      <nav
        class="flex flex-col md:flex-row md:justify-between md:items-center max-w-screen-xl mx-auto py-5 md:px-10 w-full"
      >
        <div class="flex pb-5 pl-5 md:pl-0 md:pb-0">
          <a href="#/">
            <img class="h-[48.57px]" src="images/logo-white.png" alt="logo" />
          </a>
        </div>
        <div class="flex w-full md:w-3/5 xl:w-1/2">
          <ul
            class="grid grid-cols-2 md:grid-cols-4 space-x-15 text-center text-white text-lg w-full"
          >
            <li class="border-2 border-white py-5 w-full md:border-none">
              <a href="#/shop">系列鏡框</a>
            </li>
            <li class="border-2 border-white py-5 w-full md:border-none">
              <a href="#/location">門市據點</a>
            </li>
            <li class="border-2 border-white py-5 w-full md:border-none">
              <a href="#/blog">部落格</a>
            </li>
            <li class="border-2 border-white py-5 w-full md:border-none">
              <a href="#/problem">常見問題</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `;
  }
}

export default Navbar;
