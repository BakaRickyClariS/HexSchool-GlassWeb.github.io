class Pagination extends HTMLElement {
  constructor() {
    super();
    this.currentPage = 1;
  }
  connectedCallback() {
    this.render();
    this.bindEvents();
    this.update(1);
  }
  render() {
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
                data-page="prev"
                >上一頁</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#1"
                id="page1"
                data-page="1"
                >1</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#2"
                data-page="2"
                >2</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#3"
                data-page="3"
                >3</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#4"
                data-page="4"
                >4</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="#5"
                data-page="5"
                >5</a
              >
            </li>
            <li>
              <a
                class="border py-5 px-6 hover:bg-black hover:text-white active:bg-black active:text-white"
                href="#next"
                data-page="next"
                >下一頁</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    `;
  }
  bindEvents() {
    this.querySelectorAll("#pagination a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.getAttribute("data-page");
        this.update(isNaN(page) ? page : Number(page));
      });
    });
  }

  update(page) {
    if (page === "prev" && this.currentPage > 1) {
      this.currentPage--;
    } else if (page === "next" && this.currentPage < 5) {
      this.currentPage++;
    } else if (typeof page === "number") {
      this.currentPage = page;
    }

    const defaultPage = this.querySelector("#page1");
    if (page === 1) {
      defaultPage.classList.add("text-white", "bg-black");
    } else {
      defaultPage.classList.remove("text-white", "bg-black");
    }
    this.querySelectorAll("#pagination li a").forEach((link) => {
      link.classList.remove("bg-black", "text-white");
      if (link.textContent.trim() == this.currentPage) {
        link.classList.add("bg-black", "text-white");
      }
    });
  }
}

export default Pagination;
