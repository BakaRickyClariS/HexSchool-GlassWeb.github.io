class Problem extends HTMLElement {
  constructor() {
    super();
    const qustItem = [
      {
        title: "Q1.請問可否自備鏡框單配鏡片？",
        content:
          "A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。",
      },
      {
        title: "Q2.眼鏡都可以20分鐘取件嗎？",
        content:
          "A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。",
      },
      {
        title: "Q3.散光鏡片需要額外加價嗎？",
        content:
          "A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。",
      },
      {
        title: "Q4.我可以使用舊眼鏡的度數配鏡片嗎？",
        content:
          "A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。",
      },
      {
        title: "Q5.請問可以單購買鏡框嗎？",
        content:
          "A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。",
      },
    ];
    this.innerHTML = `
    <section class="flex">
      <div
        class="max-w-screen-xl flex flex-col items-start mx-auto w-full px-5 pt-20 pb-20 xl:pr-140 pb-10 gap-10"
      >
        <div
          class="border-[#AA0601] border-l-10 text-center font-bold text-4xl md:text-5xl xl:text-6xl"
        >
          <h1 class="pl-2">常見問題</h1>
        </div>
        <div>
          <ul class="space-y-5">
            <li>
              <h1 class="text-3xl md:text-2xl xl:text-3xl font-bold">
                我想詢問配鏡問題
              </h1>
            </li>
            ${qustItem.map(
              (item) => `
            <li>
              <h1 class="text-2xl md:text-xl xl:text-2xl font-bold pb-3">
                ${item.title}
              </h1>
              <p class="text-xl md:text-lg">
                ${item.content}
              </p>
            </li>
            `
            )}
          </ul>
        </div>
      </div>
    </section>
    `;
  }
}

export default Problem;
