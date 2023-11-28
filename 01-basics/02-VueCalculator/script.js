import { defineComponent } from 'vue';
import { createApp } from './vendor/vue.esm-browser.js';

const App = defineComponent({

    name: 'App',

    data() {
        return {
            value1: null,
            value2: null,
            result: null,
            operation: ''
        };
    },

    methods: {
        sum() {
            this.result = this.value1 + this.value2;
            this.operation = 'operator1'
        },
        subtract() {
            this.result = this.value1 - this.value2;
            this.operation = 'operator2'
        },
        multiply() {
            this.result = this.value1 * this.value2;
            this.operation = 'operator3'
        },
        divide() {
            this.result = this.value1 / this.value2;
            this.operation = 'operator4'
        },
        changeResult() {
            this.operation === 'operator1' ? this.sum : '';
            this.operation === 'operator2' ? this.subtract : '';
            this.operation === 'operator3' ? this.multiply : '';
            this.operation === 'operator4' ? this.divide : '';
        },
    },
});

const app = createApp(App);
const vm = app.mount('#app');