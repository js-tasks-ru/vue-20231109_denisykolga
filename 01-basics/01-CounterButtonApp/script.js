import { defineComponent } from 'vue';
import { createApp } from './vendor/vue.esm-browser.js';

const App = defineComponent({

    name: 'App',

    data() {
        return {
            counter: 0
        };
    },

    methods: {
        addCounter() {
            this.counter++
        }
    },
});

const app = createApp(App);
const vm = app.mount('#app');