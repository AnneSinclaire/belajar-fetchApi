import { createStore } from "vuex";
// import donatur from "./modules/donatur";
// import clients from "./modules/clients";
// import transaksi from "./modules/transaksi";
// import users from "./modules/users";
// import berita from "./modules/berita";
import product from "./modules/product.js";
import categories from "./modules/categories";
import auth from "./modules/auth";
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    // donatur,
    // clients,
    // transaksi,
    // users,
    // berita,
    product,
    categories,
    auth,
  },
});

export default store;