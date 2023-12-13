import { defineComponent } from 'vue';
import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
    'Eliseo@gardner.biz',
    'Jayne_Kuhic@sydney.com',
    'Nikita@garfield.biz',
    'Lew@alysha.tv',
    'Hayden@althea.biz',
    'Presley.Mueller@myrl.com',
    'Dallas@ole.me',
    'Mallory_Kunze@marie.org',
    'Meghan_Littel@rene.us',
    'Carmen_Keeling@caroline.name',
    'Veronica_Goodwin@timmothy.net',
    'Oswald.Vandervort@leanne.org',
    'Kariane@jadyn.tv',
    'Nathan@solon.io',
    'Maynard.Hodkiewicz@roberta.com',
    'Christine@ayana.info',
    'Preston_Hudson@blaise.tv',
    'Vincenza_Klocko@albertha.name',
    'Madelynn.Gorczany@darion.biz',
    'Mariana_Orn@preston.org',
    'Noemie@marques.me',
    'Khalil@emile.co.uk',
    'Sophia@arianna.co.uk',
    'Jeffery@juwan.us',
    'Isaias_Kuhic@jarrett.net',
];

const App = defineComponent({

    name: 'App',

    data() {
        return {
            emails: emails,
            currentValue: '',
            emailsWithFlag: [],
            flag: true,
        };
    },
    beforeMount: function() {
        this.emailsWithFlag = this.emails.map((item) => {
            return { name: item, marked: false };
        });
    },
    computed: {
        filterEmails() {
            let arr = 0;
            if (this.currentValue.length > 0 && this.flag === false) {
                return false;
            } else {
                this.emailsWithFlag.map(item => {
                    if (item.name.toLowerCase().includes(this.currentValue) && this.currentValue != '') {
                        item.marked = true;
                        this.flag = true;
                    } else {
                        item.marked = false;
                    };
                });

                arr = this.emailsWithFlag.filter(item => item.marked === true).length;
                this.flag = (arr !== 0 && arr !== this.emailsWithFlag.lenght) || (this.currentValue === "");
            }
            return true;
        }
    },
});

const app = createApp(App);
const vm = app.mount('#app');
