class Pagination extends HTMLElement {
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

export default Pagination;

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
