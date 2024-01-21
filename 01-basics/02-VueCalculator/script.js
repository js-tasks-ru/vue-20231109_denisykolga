import { defineComponent } from 'vue';
import { createApp } from './vendor/vue.esm-browser.js';

const operations = {
    'sum': (a, b) => a + b,
    'subtract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b
}

const App = defineComponent({

    name: 'App',
    operations,

    data() {
        return {
            value1: null,
            value2: null,
            result: null,
            sign: '',
        };
    },

    computed: {
        calc: function() {
            return this.sign && operations[this.sign](this.value1, this.value2);
        },
    },
});

const app = createApp(App);
const vm = app.mount('#app');