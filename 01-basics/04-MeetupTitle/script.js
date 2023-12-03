import { defineComponent } from 'vue';
import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
    return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then((error) => {
                throw error;
            });
        }
    });
}

const App = defineComponent({

    name: 'App',

    data() {
        return {
            meetups: [1, 2, 3, 4, 5],
            itemValue: null,
            itemName: null,
        };
    },

    watch: {
        async itemValue(newValue, oldValue) {
            let meetup = await fetchMeetupById(newValue);
            this.itemName = meetup.title;
        }
    },
});

const app = createApp(App);
const vm = app.mount('#app');
