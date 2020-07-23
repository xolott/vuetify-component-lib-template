import Vue from "vue";
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import HamburgerMenu from "./components/HamburgerMenu.vue";
import AnimatedLoading from "./components/AnimatedLoading.vue";

const Components = {
  HelloWorld,
  Footer,
  HamburgerMenu,
  AnimatedLoading
};

Vue.component("HelloWorld", HelloWorld);
Vue.component("Footer", Footer);
Vue.component("HamburgerMenu", HamburgerMenu);
Vue.component("AnimatedLoading", AnimatedLoading);

export { HelloWorld };
export { Footer };
export { HamburgerMenu };
export { AnimatedLoading };

// Export the library as a plugin
export default Components;
