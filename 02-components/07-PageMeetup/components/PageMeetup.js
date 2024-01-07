import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
    name: 'PageMeetup',

    components: {
        UiAlert,
        UiContainer,
        MeetupView,
    },

    props: {
        meetupId: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            meetup: null,
            refreshMeetup: null,
            error: null,
        }
    },

    mounted() {
        this.fetchMeetup();
    },

    watch: {
        meetupId() {
            this.fetchMeetup();
        },
    },

    methods: {
        async fetchMeetup() {
            this.meetup = null;
            this.refreshMeetup = null;
            try {
                this.meetup = await fetchMeetupById(this.meetupId);
            } catch (error) {
                this.refreshMeetup = 1;
                this.error = error.message;
            }
        },
    },

    template: `
    <div class="page-meetup">
        <!-- meetup view -->
        <MeetupView v-if="meetup" :meetup="meetup" />
        <UiContainer v-if="!meetup && !refreshMeetup">
          <UiAlert>Загрузка...</UiAlert>
        </UiContainer>
        <UiContainer v-if="!meetup && refreshMeetup">
        <UiAlert>{{ error }}</UiAlert>
        </UiContainer>
    </div>`,
});
