require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export const eventBus = new Vue();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VeeValidate);

// fontawesome
library.add(faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// fontawesome end

// DECLARE COMPONENTS GLOBALLY
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('cp-app', require('./App.vue').default);
Vue.component('cp-header', require('./components/Header.vue'));



// VUEX STORE
const store = new Vuex.Store({
    state: {},
    mutations: {}
});

// ROUTER
//const routes = [];
const router = new VueRouter({
    routes:Routes
});

const app = new Vue({
    router,
    store,
}).$mount('#app');
