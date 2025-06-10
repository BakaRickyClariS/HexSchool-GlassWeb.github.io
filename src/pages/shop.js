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

class SectionB extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        img: "images/home-section2-1.png",
        title: "單一價格",
        desc: "無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。",
      },
      {
        img: "images/home-section2-2.png",
        title: "20 分鐘即可取件",
        desc: "為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。",
      },
      {
        img: "images/home-section2-3.png",
        title: "安心售後服務",
        desc: "我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。",
      },
      {
        img: "images/home-section2-4.png",
        title: "關於鏡片",
        desc: "使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。",
      },
    ];
    this.innerHTML = `
    <section class="flex bg-[#FBF2F2]">
      <div
        class="max-w-screen-xl text-[#650300] font-bold flex flex-col mx-auto w-full py-20 px-10"
      >
        <h1 class="text-center text-5xl block pb-15">用專業的心，做專業的事</h1>
        <div
          class="flex-row gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-y-5"
        >
          ${items
            .map(
              (item) => `
      <div class="flex flex-col items-center w-full space-y-2 mx-auto">
        <img class="w-[83.83px]" src="${item.img}" alt="" />
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
      </div>
    `
            )
            .join("")}
        </div>
      </div>
    </section>
    `;
  }
}

class SectionC extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        img: "images/home-section3-1.png",
        title: "OPTICAL",
      },
      {
        img: "images/home-section3-2.png",
        title: "SUNGLASSES",
      },
      {
        img: "images/home-section3-3.png",
        title: "FUNCTIONAL",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl text-[#650300] font-bold flex flex-col mx-auto w-full py-30 px-10"
      >
        <h1 class="text-center text-5xl block pb-15">經典系列鏡框</h1>
        <div
          class="flex flex-col space-x-5 flex-wrap xl:flex-row space-y-5 gap-5"
        >
        ${items
          .map(
            (item) => `
          <div class="flex flex-col items-center max-w-[380px] space-y-2 mx-auto">
            <img class="w-[416px]" src="${item.img}" alt="" />
            <h1 class="text-5xl text-[#AA0601]">${item.title}</h1>
          </div>
        `
          )
          .join("")}
        </div>
      </div>
    </section>
    `;
  }
}

class SectionD extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        img: "images/home-section4-1.png",
        imgSm: "images/home-section4-1-sm.png",
        title: "DOUBLE A+",
      },
      {
        img: "images/home-section4-2.png",
        imgSm: "images/home-section4-2-sm.png",
        title: "YOUTH",
      },
    ];
    this.innerHTML = `
    <section class="flex bg-[url('images/index-bg.png')] bg-cover bg-center">
      <div
        class="max-w-screen-xl text-white font-bold flex flex-col justify-center mx-auto w-full px-10 py-30"
      >
        <h1 class="text-center text-5xl block pb-15">聯名設計鏡框</h1>
        <div
          class="flex flex-row w-full flex-wrap lg:flex-nowrap gap-10 lg:gap-0"
        >
        ${items
          .map(
            (item) => `
          <div class="text-center m-auto">
            <picture>
              <source
                media="(max-width: 1024px)"
                srcset="${item.imgSm}"
              />
              <img
                class="w-full block"
                src="${item.img}"
                alt=""
              />
            </picture>
            <h1 class="text-5xl py-5 w-full text-[#AA0601] bg-white">${item.title}</h1>
          </div>
        `
          )
          .join("")}
        </div>
      </div>
    </section>
    `;
  }
}

class SectionE extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        img: "images/home-section5-1.png",
        name: "Jessy",
        desc: "眼鏡品質優良，下次還會想來這邊購買！",
        date: "2021/06/20",
      },
      {
        img: "images/home-section5-2.png",
        name: "凱倫",
        desc: "做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！",
        date: "2021/04/18",
      },
      {
        img: "images/home-section5-3.png",
        name: "悠悠",
        desc: "謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！",
        date: "2020/12/25",
      },
      {
        img: "images/home-section5-4.png",
        name: "JeKyuanssy",
        desc: "服務很好，品質沒有任何問題，非常喜歡。",
        date: "2020/10/31",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl font-bold flex flex-col justify-center mx-auto w-full py-30 px-10"
      >
        <h1 class="text-center text-[#AA0601] text-5xl block pb-15">
          顧客推薦
        </h1>
        <div
          class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
        ${items
          .map(
            (
              item
            ) => `<div class="text-center m-auto shadow-xl w-full text-left">
            <img class="w-full block" src="${item.img}" alt="" />
            <div class="p-5">
              <p class="pb-3">${item.name}</p>
              <p class="pb-10">${item.desc}</p>
              <p class="text-[#707070]">${item.date}</p>
            </div>
          </div>`
          )
          .join("")}
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

class SectionF extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section class="flex bg-[#FBF2F2]">
      <div
        class="max-w-screen-sm font-bold flex flex-col justify-center items-center mx-auto w-full py-30 px-10"
      >
        <h1 class="text-center text-[#AA0601] text-5xl block pb-15">
          聯絡我們
        </h1>
        <p class="block text-lg pb-10">
          我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
        </p>
        <div class="flex w-full">
          <form class="space-y-6 w-full">
            <fieldset class="space-y-4">
              <legend class="sr-only">聯絡表單說明</legend>

              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >姓名</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-input w-full border-solid border-2 border-black"
                  placeholder="陳小明"
                  required
                />
              </div>

              <div>
                <label
                  for="tel"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >聯絡電話</label
                >
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  class="form-input w-full border-solid border-2 border-black"
                  placeholder="0912-345-678"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >電子郵件</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input w-full border-solid border-2 border-black"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label
                  for="text"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >意見反應</label
                >
                <textarea
                  id="text"
                  name="text"
                  class="form-input w-full h-32 border-solid border-2 border-black"
                  placeholder="請輸入您的意見..."
                  required
                ></textarea>
              </div>

              <div class="flex items-center space-x-2 mt-6">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  class="form-checkbox h-5 w-5 text-blue-600 rounded"
                  required
                />
                <label for="checkbox" class="text-sm text-gray-600">
                  我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
                </label>
              </div>
            </fieldset>
            <button
              type="submit"
              class="w-full bg-[#AA0601] hover:bg-blue-700 text-white font-medium py-3 px-6 transition-colors"
            >
              確認送出
            </button>
          </form>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("section-a", SectionA);
customElements.define("section-b", SectionB);
customElements.define("section-c", SectionC);
customElements.define("section-d", SectionD);
customElements.define("section-e", SectionE);
customElements.define("section-f", SectionF);

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
