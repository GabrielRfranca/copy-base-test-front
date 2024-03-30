import { createApp } from 'vue'
import App from './HomeView/App.vue'
import store from './Store/Index';

const app = createApp(App);

app.use(store);
app.mount('#app');
