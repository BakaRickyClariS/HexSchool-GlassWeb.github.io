import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/home.js";
import Shop from "./pages/shop.js";
import Location from "./pages/location.js";
import SimpleRouter from "./components/Router.js";
import Problem from "./pages/problem.js";
import Blog from "./pages/blog.js";
import Pagination from "./components/Pagination.js";

// 組件註冊
customElements.define("my-navbar", Navbar);
customElements.define("my-footer", Footer);
customElements.define("my-pagination", Pagination);

// 頁面註冊
customElements.define("my-home", Home);
customElements.define("my-shop", Shop);
customElements.define("my-location", Location);
customElements.define("my-problem", Problem);
customElements.define("my-blog", Blog);

// 路由初始化
const router = new SimpleRouter("outlet");
router.addRoute("/", "my-home");
router.addRoute("/problem", "my-problem");
router.addRoute("/shop", "my-shop");
router.addRoute("/shop/optical", "my-shop");
router.addRoute("/shop/sunglasses", "my-shop");
router.addRoute("/shop/functional", "my-shop");
router.addRoute("/location", "my-location");
router.addRoute("/location/branch", "my-location");
router.addRoute("/blog", "my-blog");
router.addRoute("/blog/article", "my-blog");
router.resolve();
