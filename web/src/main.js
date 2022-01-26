import Vue from 'vue';
import App from './App.vue';

import router from './router';
import iView from "iview";
import vueMoment from 'vue-moment';
import VueQuillEditor from 'vue-quill-editor';
import ElementUI from 'element-ui';
import VueClipboard from 'vue-clipboard2';

import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import store from "@/store/store";

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(vueMoment)
Vue.use(VueQuillEditor)
Vue.use(VueClipboard)
new Vue({
    el: '#app',
    router,
    store,
    render: c => c(App),
    components: { App },
    template: '<App/>'
})