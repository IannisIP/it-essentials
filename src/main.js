import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { store } from "./store/store";
import composition from "./plugins/composition";

Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	store,
	composition,
	render: (h) => h(App),
}).$mount("#app");
