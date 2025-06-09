import Navbar from "./components/Navbar.js";

// class SimpleRouter {
//   /*************  ✨ Windsurf Command ⭐  *************/
//   /**
//    * Creates a new instance of SimpleRouter.
//    * @param {string} outletId - The ID of the element that will serve as the outlet for the router.
//    */
//   /*******  0ca95863-1673-441a-93b7-ec0a6c1d9730  *******/
//   constructor(outletId) {
//     this.routes = new Map();
//     this.outlet = document.getElementById(outletId);
//     window.addEventListener("hashchange", () => this.resolve());
//   }

//   /*************  ✨ Windsurf Command ⭐  *************/
//   /**
//    * Adds a route to the router.
//    * @param {string} path - The path for the route.
//    * @param {string} component - The component associated with the path.
//    */

//   /*******  84ea8df4-1488-4cf0-9f25-10e87195b36d  *******/
//   addRoute(path, component) {
//     this.routes.set(path, component);
//   }

//   /*************  ✨ Windsurf Command ⭐  *************/
//   /**
//    * Resolves the route based on the current hash value.
//    * If no matching route is found, it will render the component associated with the "*" path.
//    * @returns {void}
//    */
//   /*******  c590f5cf-602a-410a-b459-ad3621a221df  *******/
//   resolve() {
//     const path = window.location.hash.slice(1) || "/";
//     const Component = this.routes.get(path) || this.routes.get("*");
//     this.outlet.innerHTML = `<${Component}></${Component}>`;
//   }
// }

// 組件註冊
customElements.define("my-navbar", Navbar);

// 路由初始化
// const router = new SimpleRouter("outlet");
// router.addRoute("/", "home-page");
// router.addRoute("/about", "about-page");
// router.addRoute("*", "home-page");
// router.resolve();
