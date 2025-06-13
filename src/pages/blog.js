import SimpleRouter from "../components/Router.js";
class BlogNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section class="bg-[#650300]">
      <nav
        class="flex flex-col md:flex-row md:justify-between md:items-center max-w-screen-xl mx-auto md:px-15 w-full"
      >
        <div class="flex w-full md:w-3/5">
          <ul
            class="grid grid-cols-4 space-x-4 text-center md:text-left text-white text-lg w-full"
          >
            <li class="py-3 w-full m-0">
              <a href="#/shop/optical">最新消息</a>
            </li>
            <li class="py-3 w-full m-0">
              <a href="#/location">特別企劃</a>
            </li>
            <li class="py-3 w-full m-0">
              <a href="#/blog">新品上市</a>
            </li>
            <li class="py-3 w-full m-0">
              <a href="#/problem">鏡框小知識</a>
            </li>
          </ul>
        </div>
        <div class="pb-5 pl-5 md:pl-0 md:pb-0 hidden md:flex">
          <a href="#/">
            <img class="h-[29px] invert" src="images/ic-search.svg" alt="logo" />
          </a>
        </div>
      </nav>
    </section>
    `;
  }
}

class BlogItem extends HTMLElement {
  constructor() {
    super();
    const blogItem = [
      {
        title: "情人特別企劃",
        subTitle: "2020 Valentine’s Special",
        img: "images/blog-1.png",
        date: "2020/02/14",
        content:
          "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯",
      },
      {
        title: "街頭潮人訪問",
        subTitle: "Street Interview",
        img: "images/blog-2.png",
        date: "2020/02/02",
        content:
          "炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯",
      },
      {
        title: "春季新品上市",
        subTitle: "New Selection",
        img: "images/blog-3.png",
        date: "2020/02/02",
        content:
          "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯",
      },
      {
        title: "設計師獨享鏡框優惠",
        subTitle: "Sales for Designer",
        img: "images/blog-4.png",
        date: "2020/01/18",
        content:
          "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯",
      },
      {
        title: "抵抗夏日大作戰",
        subTitle: "Summer Special",
        img: "images/blog-5.png",
        date: "2019/08/07",
        content:
          "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col items-start mx-auto w-full px-5 pt-20 pb-10 gap-10"
      >
        <div
          class="border-[#AA0601] border-l-10 text-center font-bold text-4xl md:text-5xl xl:text-6xl"
        >
          <h1 class="pl-2">部落格</h1>
        </div>
        <div>
          <ul>
            ${blogItem
              .map(
                (
                  item
                ) => `<li class="m-auto w-full text-left pb-15 flex flex-col md:flex-row md:gap-7">
            <img class="w-full md:w-1/2 block object-cover" src="${item.img}" alt="" />
            <div class="flex flex-col">
            <div
              class="flex flex-col font-bold py-2"
            >
              <h1 class="block text-5xl md:text-3xl text-[#650300] pt-5 pb-3">${item.title}</h1>
              <span class="w-full flex flex-row justify-between text-3xl md:text-xl"><p class="block">${item.subTitle}</p><p class="block text-gray-400">${item.date}</p></span>
              
            </div>
            <div class="md:flex hidden relative text-gray-400 ">
                <p class="pt-3">${item.content}</p>
                <a
                class="xl:uppercase absolute right-0 bottom-0 xl:bottom-[-140px] xl:text-[#650300] xl:text-3xl xl:font-extrabold"
                href="#/blog/article"
                >more</a
              >
            </div>
            </div>
            
          </li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    </section>
    <my-pagination></my-pagination>
    `;
  }
}
class BlogArticle extends HTMLElement {
  constructor() {
    super();
    const blogArticle = {
      title: "情人特別企劃",
      subTitle: "2020 Valentine’s Special",
      date: "2020/02/14",
      tag: [
        "special",
        "sale",
        "new_item",
        "interview",
        "trivia",
        "news",
        "event",
      ],
      content: [
        {
          img: "images/blogpage-1.png",
          text: "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
        },
        {
          img: "images/blogpage-2.png",
          text: "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
        },
        {
          img: "images/blogpage-3.png",
          text: "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
        },
        {
          img: "images/blogpage-4.png",
          text: "2/14(五)-2/20(日) 至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個 期間優惠還有~~持他牌鏡框更換鏡片 薄型非球面鏡片折300元 濾藍光鏡片折500元 快快帶上另一半 讓彼此每一次睜開眼，都被愛的視線包圍!",
        },
      ],
    };
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-row items-start mx-auto w-full px-5 md:px-15 pt-5 pb-10 gap-10"
      >
        <div class="flex flex-col w-full md:w-4/5">
        <div
          class="text-left font-bold"
        >
        <p class="block font-normal text-2xl md:text-base">首頁 / 部落格 / 特別企劃 / <span class="text-[#AA0601]">情人特別企劃</span></p>
        <h1 class="block text-2xl py-1 px-2 text-[#AA0601] font-extrabold">#special #event</h1>
          <h1 class="block text-4xl md:text-5xl pt-5">情人特別企劃</h1>
          <h1 class="block text-2xl py-3">2020 Valentine’s Special</h1>
        </div>
          <ul>
            ${blogArticle.content
              .map(
                (
                  item
                ) => `<li class="m-auto w-full text-left pb-10 flex flex-col gap-3">
            <img class="w-full block object-cover" src="${item.img}" alt="" />
            <p class="">${item.text}</p>
            
          </li>`
              )
              .join("")}
          </ul>
        </div>
      <div class="hidden md:flex md:flex-col w-1/5 font-extrabold text-[#AA0601]">
        <div
          class="flex items-center"
        >
        <img class="block h-10" src="images/ic-tag-abel.png" alt="" />
          <h1 class=" text-3xl">TAGS</h1>
        </div>
        <div
          class="flex flex-row flex-wrap"
        >${blogArticle.tag
          .map(
            (item) => `
          <h1 class="text-2xl py-1 px-2">#${item}</h1>
          `
          )
          .join("")}
          
        </div>
      </div>
      </div>
    </section>
    `;
  }
}

customElements.define("blog-navbar", BlogNavbar);
customElements.define("blog-item", BlogItem);
customElements.define("blog-article", BlogArticle);

class Blog extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <blog-navbar></blog-navbar>
    <div id="blog-outlet"></div>
    `;
    this.blogRouter = new SimpleRouter("blog-outlet");
    this.blogRouter.addRoute("/blog", "blog-item");
    this.blogRouter.addRoute("/blog/article", "blog-article");
    this.blogRouter.resolve();
  }
}

export default Blog;
