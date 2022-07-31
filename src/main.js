import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKeyboard, faQuestion} from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle}from '@fortawesome/free-solid-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

library.add(faKeyboard);
library.add(faGlobe)
library.add(faUniversalAccess)
library.add(faSearch)
library.add(faQuestionCircle)
library.add(faQuestion)

new Vue({
  router,
  vuetify,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app')
