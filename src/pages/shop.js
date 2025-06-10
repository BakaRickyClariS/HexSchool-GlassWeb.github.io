class SectionA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section
      class="flex bg-[url('images/home-header-sm.png')] xl:bg-[url('images/home-header.png')] h-[787px] bg-cover bg-center"
    >
      <div
        class="max-w-screen-xl text-[#650300] font-bold flex relative mx-auto w-full"
      >
        <div class="absolute top-2/5 right-10 space-y-5 text-right">
          <p class="text-3xl">Promise-Desert 2020 早春系列</p>
          <h1 class="text-6xl">看得清，才能看得遠</h1>
          <a class="text-white p-2 bg-[#AA0601] text-center" href="/"
            >立即購買</a
          >
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("section-a", SectionA);

class Shop extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section-a></section-a>
    <section-b></section-b>
    <section-c></section-c>
    <section-d></section-d>
    <section-e></section-e>
    <section-f></section-f>
    `;
  }
}

export default Shop;
