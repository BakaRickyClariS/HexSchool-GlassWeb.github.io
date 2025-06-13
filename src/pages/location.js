import SimpleRouter from "../components/Router.js";

class LocationNav extends HTMLElement {
  connectedCallback() {
    const locatInfos = JSON.parse(this.getAttribute("locatInfos") || "[]");
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col items-start mx-auto w-full px-5 pt-20 pb-10 gap-10"
      >
        <div
          class="border-[#AA0601] border-l-10 text-center font-bold text-4xl md:text-5xl xl:text-6xl"
        >
          <h1 class="pl-2">門市據點</h1>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-5 justify-start w-full" id="select">
          <p id="sel-title" class="block text-2xl">${
            locatInfos[0].selectName
          }</p>
          ${locatInfos
            .map(
              (locatInfo, i) => `<select
            class="text-3xl md:text-2xl border border-gray-500 p-2 ${
              i === 1 ? `hidden` : `block`
            }"
            name="select"
            id="select${i}"
          >
          <option value="" disabled>${locatInfo.selectDisabled}</option>
          ${locatInfo.selectOption
            .map((item) => `<option value="${item}">${item}</option>`)
            .join("")}
          </select>`
            )
            .join("")}
          
        </div>
      </div>
    </section>
    `;
    // 監聽下拉選單變化
    const selectElement = this.querySelector("#select");
    console.log(selectElement);

    selectElement.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      const selTitle = document.getElementById("sel-title");
      const secondSel = document.getElementById("select1");
      selTitle.innerText = locatInfos[1].selectName;
      secondSel.classList.add("block");
      secondSel.classList.remove("hidden");
      // 派發自訂事件（事件名：location-change）
      this.dispatchEvent(
        new CustomEvent("location-change", {
          detail: {
            selectedValue: selectedValue,
            locatInfos: locatInfos,
          },
          bubbles: true, // 讓事件冒泡到父元件
          composed: true,
        })
      );
    });
  }
}

class LocationItem extends HTMLElement {
  constructor() {
    super();
    this.itemInfo = JSON.parse(this.getAttribute("itemInfo") || "[]");
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col items-start mx-auto w-full px-5 pb-20 gap-10"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 ${
            this.itemInfo.length > 1 ? `xl:grid-cols-3` : `xl:grid-cols-2`
          }  gap-5 justify-start"
        >
        ${this.itemInfo
          .map(
            (
              item
            ) => `<div id="${item.id}" name="shopLocat" class="w-full border-1 border-gray-300">
            <img class="object-cover" src="${item.img}" alt="" />
            <div class="w-full text-2xl">
              <h1 class="text-3xl w-full py-3 px-7 border-b border-gray-300">
                ${item.name}
              </h1>
              <ul class="text-2xl xl:text-xl w-full px-7 py-2">
                <li class="flex flex-row items-center gap-2 justify-start py-2">
                  <img class="invert" src="images/ic-footer-tel.svg" alt="" />
                  <p>電話：${item.tel}</p>
                </li>
                <li class="flex flex-row items-center gap-2 justify-start py-2">
                  <img class="invert" src="images/ic-schedule.svg" alt="" />
                  <p>營業時間：${item.schedule}</p>
                </li>
                <li class="flex flex-row items-start gap-2 justify-start py-2">
                  <img
                    class="invert pt-1"
                    src="images/ic-location.svg"
                    alt=""
                  />
                  <p>地址：${item.location}</p>
                </li>
              </ul>
              <a
                class="detail-btn block w-full text-center py-5 bg-black text-white"
                data-store-id="${item.id}"
                href="${item.link}"
                >詳細資訊</a
              >
            </div>
          </div>`
          )
          .join("")}
        </div>
      </div>
    </section>
    `;
  }
  update(itemInfo) {
    this.itemInfo = itemInfo;
    this.render();
  }
}

class GoogleMapComponent extends HTMLElement {
  constructor() {
    super();
    this.address = "";
    this.storeName = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.address) {
      this.innerHTML = `
        <p class="p-4 text-gray-500 italic">地址資訊載入中...</p>
      `;
      return;
    }

    const encodedAddress = encodeURIComponent(
      `${this.storeName} ${this.address}`
    );
    const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    this.innerHTML = `
      <div class="google-map-container bg-white rounded-lg shadow-md overflow-hidden">
        <div class="w-full h-full">
          <iframe 
            src="${mapUrl}"
            class="w-full h-full"
            style="min-height: 600px;"
            allowfullscreen
            loading="lazy"
            title="${this.storeName} 地圖位置">
          </iframe>
        </div>
      </div>
    `;
  }

  updateMap(storeName, address) {
    this.storeName = storeName;
    this.address = address;
    this.render();
  }
}

customElements.define("google-map", GoogleMapComponent);

customElements.define("location-nav", LocationNav);
customElements.define("location-item", LocationItem);

function updateItemComponent(parentElement, itemInfo) {
  const itemComponent = parentElement.querySelector("location-item");
  if (itemComponent) {
    itemComponent.update(itemInfo);

    // 如果只有一個項目，顯示地圖
    if (itemInfo.length === 1) {
      const store = itemInfo[0];
      addGoogleMap(parentElement, store);
    } else {
      removeGoogleMap(parentElement);
    }
  }
}

function addGoogleMap(parentElement, store) {
  // 移除舊地圖
  removeGoogleMap(parentElement);

  // 建立新地圖
  const mapComponent = document.createElement("google-map");
  mapComponent.updateMap(store.name, store.location);

  // 加入到頁面
  const itemComponent = parentElement.querySelector('[name="shopLocat"]');
  if (itemComponent) {
    itemComponent.insertAdjacentElement("afterend", mapComponent);
  }
}

function removeGoogleMap(parentElement) {
  const existingMap = parentElement.querySelector("google-map");
  if (existingMap) {
    existingMap.remove();
  }
}

class Location extends HTMLElement {
  constructor() {
    super();
    const locatInfos = [
      {
        selectName: "選擇地區",
        selectDisabled: "請選擇地區-----------------",
        selectOption: ["台北市", "台中市", "高雄市"],
      },
      {
        selectName: "選擇分店",
        selectDisabled: "請選擇分店-----------------",
        selectOption: [
          "台北中山旗艦店",
          "台北綠園店",
          "台中清水旗艦店",
          "高雄中正形象店",
          "高雄夢時代店",
        ],
      },
    ];
    const itemInfo = [
      {
        id: "台北市",
        name: "台北中山旗艦店",
        img: "images/store-1.png",
        tel: "(02)000-1234",
        schedule: "10:00-21:00",
        location: "台北市中山區南京東路25巷2-1號",
        link: "#/location/branch",
      },
      {
        id: "台北市",
        name: "台北綠園店",
        img: "images/store-2.png",
        tel: "(02)000-2345",
        schedule: "10:00-21:00",
        location: "台北市中正區復興南路 132-1 號",
        link: "#/location/branch",
      },
      {
        id: "台中市",
        name: "台中清水旗艦店",
        img: "images/store-3.png",
        tel: "(02)000-1234",
        schedule: "10:00-21:00",
        location: "台中市清水區經南一路 23 號 8 樓",
        link: "#/location/branch",
      },
      {
        id: "高雄市",
        name: "高雄中正形象店",
        img: "images/store-4.png",
        tel: "(07)000-2345",
        schedule: "10:00-21:00",
        location: "高雄市苓雅區中正路 38 號 12 樓",
        link: "#/location/branch",
      },
      {
        id: "高雄市",
        name: "高雄夢時代店",
        img: "images/store-5.png",
        tel: "(07)000-1234",
        schedule: "10:00-21:00",
        location: "高雄市前鎮區中華一路 63 號 6 樓",
        link: "#/location/branch",
      },
    ];

    this.innerHTML = `
    <location-nav locatInfos='${JSON.stringify(locatInfos)}'></location-nav>
    <location-item itemInfo='${JSON.stringify(itemInfo)}'></location-item>
    `;

    const locationNav = this.querySelector("location-nav");
    const secondSel = locationNav.querySelector("#select1");
    console.log("--------", secondSel);

    locationNav.addEventListener("location-change", (event) => {
      const { selectedValue, locatInfos } = event.detail;
      const newItemInfo = itemInfo.filter(
        (item) => item.id === selectedValue || item.name === selectedValue
      );
      if (newItemInfo.length !== 1 || selectedValue === "台中市") {
        secondSel.innerHTML = `<option value="" disabled>${
          locatInfos[1].selectDisabled
        }</option>
          ${newItemInfo
            .map((item) => `<option value="${item.name}">${item.name}</option>`)
            .join("")}`;
      }
      // 只更新需要變動的部分，不再呼叫 locatInit
      updateItemComponent(this, newItemInfo);
    });
  }
}

export default Location;
