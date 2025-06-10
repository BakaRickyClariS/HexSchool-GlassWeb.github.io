class ShopNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section
      class="flex"
    >
      <div
        class="max-w-screen-xl text-[#650300] font-bold flex mx-auto w-full"
      >
        <ul class="grid grid-cols-3">
          <li><a class="w-full p-5" href="#/shop/optical">OPTICAL</a></li>
          <li><a class="w-full p-5" href="#/shop/sunglasses">SUNGLASSES</li>
          <li><a class="w-full p-5" href="#/shop/functional">FUNCTIONAL</li>
        </ul>
      </div>
    </section>
    `;
  }
}

customElements.define("shop-nav", ShopNav);
class Shop extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <shop-nav></shop-nav>
    `;
  }
}

export default Shop;
