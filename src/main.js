import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Home from "./pages/home.js";
import Shop from "./pages/shop.js";
import SimpleRouter from "./components/Router.js";

// 組件註冊
customElements.define("my-navbar", Navbar);
customElements.define("my-footer", Footer);

// 頁面註冊
customElements.define("my-home", Home);
customElements.define("my-shop", Shop);

// 路由初始化
const router = new SimpleRouter("outlet");
router.addRoute("/", "my-home");
router.addRoute("/about", "my-about");
router.addRoute("/shop", "my-shop");
router.addRoute("/location", "my-location");
router.addRoute("/blog", "my-blog");
router.resolve();
