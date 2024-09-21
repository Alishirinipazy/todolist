import { createApp } from 'vue';
import './assets/style.css'
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.mount('#app');
const options = {
    position: "bottom-center",
    timeout: 1500,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
};
app.use(Toast, options);
AOS.init({
    duration: 1200, // Duration of animations
});