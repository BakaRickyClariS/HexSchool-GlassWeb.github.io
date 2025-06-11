import SimpleRouter from "../components/Router.js";
class ShopNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl text-2xl text-center font-bold flex mx-auto w-full xl:px-10"
      >
        <ul class="grid grid-cols-3 w-full gap-0">
          <li class="border-l border-gray-400 last:border-l-1">
            <a
              class="block py-5 border-b-8 border-transparent focus:border-red-500"
              href="#/shop/optical"
              >OPTICAL</a
            >
          </li>
          <li class="border-x border-gray-400 last:border-x-1">
            <a
              class="block py-5 border-b-8 border-transparent focus:border-red-500"
              href="#/shop/sunglasses"
              >SUNGLASSES</a
            >
          </li>
          <li class="border-r border-gray-400 last:border-r-1">
            <a
              class="block py-5 border-b-8 border-transparent focus:border-red-500"
              href="#/shop/functional"
              >FUNCTIONAL</a
            >
          </li>
        </ul>
      </div>
    </section>
    `;
  }
}

class ShopOptical extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        name: "BJ41600S",
        img: "images/product-1.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-2.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-3.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-4.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-1.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-2.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-3.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-4.png",
        price: "3,490",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div class="flex mx-auto w-full">
        <div class="grid grid-cols-2 w-full">
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="images/product-header-sm-1.png"
            />
            <img
              class="w-full block object-cover"
              src="images/product-header-1.png"
              alt=""
            />
          </picture>
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="images/product-header-sm-2.png"
            />
            <img
              class="w-full block object-cover"
              src="images/product-header-2.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col justify-center mx-auto w-full py-30 px-10"
      >
        <h1 class="text-center font-bold text-5xl block pb-5">
          Celluloid Combi
        </h1>
        <h1 class="text-center text-4xl block pb-10">賽璐珞鈦金屬混合鏡框</h1>
        <div
          class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
        ${items
          .map(
            (item) => `<div class="text-center m-auto w-full text-left">
            <img class="w-full block" src="${item.img}" alt="" />
            <div
              class="flex flex-row justify-between text-5xl md:text-3xl xl:text-2xl py-2"
            >
              <p class="block">${item.name}</p>
              <p class="block text-[#AA0601]">NTD${item.price}</p>
            </div>
            <div class="flex flex-row justify-start gap-2">
              <div
                class="size-10 md:size-8 xl:size-6 bg-[#5F3E2D] rounded-lg md:rounded-md xl:rounded"
              ></div>
              <div
                class="size-10 md:size-8 xl:size-6 bg-[#B75929] rounded-lg md:rounded-md xl:rounded"
              ></div>
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

class ShopSunglasses extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        name: "BJ41600S",
        img: "images/product-7.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-8.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-9.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-10.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-11.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-12.png",
        price: "3,490",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div class="flex mx-auto w-full">
        <div class="grid grid-cols-2 w-full">
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="images/product-header-sm-3.png"
            />
            <img
              class="w-full block object-cover"
              src="images/product-header-3.png"
              alt=""
            />
          </picture>
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="images/product-header-sm-4.png"
            />
            <img
              class="w-full block object-cover"
              src="images/product-header-4.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col justify-center mx-auto w-full py-30 px-10"
      >
        <h1 class="text-center font-bold text-5xl block pb-5">
          2020 NEW COLLECTION
        </h1>
        <h1 class="text-center text-4xl block pb-10">賽璐珞鈦金屬混合鏡框</h1>
        <div
          class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
        ${items
          .map(
            (item) => `<div class="text-center m-auto w-full text-left">
            <img class="w-full block" src="${item.img}" alt="" />
            <div
              class="flex flex-row justify-between text-5xl md:text-3xl xl:text-2xl py-2"
            >
              <p class="block">${item.name}</p>
              <p class="block text-[#AA0601]">NTD${item.price}</p>
            </div>
            <div class="flex flex-row justify-start gap-2">
              <div
                class="size-10 md:size-8 xl:size-6 bg-[#5F3E2D] rounded-lg md:rounded-md xl:rounded"
              ></div>
              <div
                class="size-10 md:size-8 xl:size-6 bg-[#B75929] rounded-lg md:rounded-md xl:rounded"
              ></div>
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

class ShopFunctional extends HTMLElement {
  constructor() {
    super();
    const items = [
      {
        name: "BJ41600S",
        img: "images/product-1.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-3.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-5.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-7.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-9.png",
        price: "3,490",
      },
      {
        name: "BJ41600S",
        img: "images/product-11.png",
        price: "3,490",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div class="flex mx-auto w-full">
        <div class="grid grid-cols-2 w-full">
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="images/product-header-sm-1.png"
            />
            <img
              class="w-full block object-cover"
              src="images/product-header-1.png"
              alt=""
            />
          </picture>
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="images/product-header-sm-4.png"
            />
            <img
              class="w-full block object-cover"
              src="images/product-header-4.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col justify-center mx-auto w-full py-30 px-10"
      >
        <h1 class="text-center font-bold text-5xl block pb-5">
          2020 NEW FUNCTIONAL
        </h1>
        <h1 class="text-center text-4xl block pb-10">賽璐珞鈦金屬混合鏡框</h1>
        <div
          class="w-full gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
        ${items
          .map(
            (item) => `<div class="text-center m-auto w-full text-left">
            <img class="w-full block" src="${item.img}" alt="" />
            <div
              class="flex flex-row justify-between text-5xl md:text-3xl xl:text-2xl py-2"
            >
              <p class="block">${item.name}</p>
              <p class="block text-[#AA0601]">NTD${item.price}</p>
            </div>
            <div class="flex flex-row justify-start gap-2">
              <div
                class="size-10 md:size-8 xl:size-6 bg-[#5F3E2D] rounded-lg md:rounded-md xl:rounded"
              ></div>
              <div
                class="size-10 md:size-8 xl:size-6 bg-[#B75929] rounded-lg md:rounded-md xl:rounded"
              ></div>
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

class ShopPagination extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <section class="flex">
      <div class="flex mx-auto w-full">
        <div class="flex w-full pb-20">
          <ul
            id="pagination"
            class="flex flex-row items-center justify-center w-full text-center text-xl p-10"
          >
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white active:bg-black active:text-white"
                href="#prev"
                onclick="switchPage('prev'); event.preventDefault();"
                >上一頁</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#1"
                onclick="switchPage(1); event.preventDefault();"
                >1</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#2"
                onclick="switchPage(2); event.preventDefault();"
                >2</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#3"
                onclick="switchPage(3); event.preventDefault();"
                >3</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#4"
                onclick="switchPage(4); event.preventDefault();"
                >4</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#5"
                onclick="switchPage(5); event.preventDefault();"
                >5</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white active:bg-black active:text-white"
                href="#next"
                onclick="switchPage('next'); event.preventDefault();"
                >下一頁</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("shop-optical", ShopOptical);
customElements.define("shop-sunglasses", ShopSunglasses);
customElements.define("shop-functional", ShopFunctional);
customElements.define("shop-pagination", ShopPagination);
customElements.define("shop-nav", ShopNav);
class Shop extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <shop-nav></shop-nav>
    <div id="shop-outlet"></div>
    <shop-pagination></shop-pagination>
    `;
    this.shopRouter = new SimpleRouter("shop-outlet");
    this.shopRouter.addRoute("/shop/optical", "shop-optical");
    this.shopRouter.addRoute("/shop/sunglasses", "shop-sunglasses");
    this.shopRouter.addRoute("/shop/functional", "shop-functional");
    this.shopRouter.resolve();
  }
}

export default Shop;

let currentPage = 1; // 預設在第一頁

function switchPage(page) {
  // 處理上一頁、下一頁
  if (page === "prev" && currentPage > 1) {
    currentPage--;
  } else if (page === "next" && currentPage < 5) {
    // 最多 5 頁
    currentPage++;
  } else if (typeof page === "number") {
    currentPage = page;
  }
  console.log("CLick!!!!!!!!");

  // 更新 active 樣式
  document.querySelectorAll("#pagination li a").forEach((link) => {
    link.classList.remove("bg-black", "text-white");
    // 檢查 link.textContent 是否等於 currentPage
    if (link.textContent.trim() == currentPage) {
      link.classList.add("bg-black", "text-white");
    }
  });
}
window.switchPage = switchPage;
window.switchPage(currentPage);
