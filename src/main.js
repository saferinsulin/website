import { createApp } from 'vue';
import App from './App.vue';
import FomanticUI from 'vue-fomantic-ui';
import 'fomantic-ui-css/semantic.min.css';

const app = createApp(App);
app.use(FomanticUI);
app.mount('#app');
