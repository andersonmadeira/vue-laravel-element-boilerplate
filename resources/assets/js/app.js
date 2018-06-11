require('./bootstrap');

window.Vue = require('vue');
window.ElementUI = require('element-ui');

var App = Vue.component('App', require('./components/App.vue'));
Vue.component('Navbar', require('./components/Navbar.vue'));
Vue.component('Sidemenu', require('./components/Sidemenu.vue'));

Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
});
