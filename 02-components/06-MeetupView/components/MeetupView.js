import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupAgenda from './MeetupAgenda.js';
import meetups from '../api/meetups.js';

export default defineComponent({
    name: 'MeetupView',

    components: {
        UiAlert,
        UiContainer,
        MeetupDescription,
        MeetupCover,
        MeetupInfo,
        MeetupAgendaItem,
        MeetupAgenda
    },

    data() {
        return {
            meetups,
            selectedMeetup: 0,
        };
    },

    props: {
        meetup: {
            type: Object,
            required: true,
        },
    },
    computed: {
        description() {
            return this.meetups[this.selectedMeetup].description;
        },
    },

    template: `
    <div>
      <!-- meetup cover-->
      <MeetupCover :title="meetups[selectedMeetup].title" :image="meetups[selectedMeetup].image" />
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <p>
            <select v-model="selectedMeetup">
            <option v-for="(meetup, index) in meetups" :key="meetup.id" :value="index">
              {{ index }}: {{ meetup.title }}
            </option>
            </select>
          </p>
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="description" />
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <MeetupAgenda :agenda="meetups[selectedMeetup].agenda" />
            <UiAlert v-if="meetups[selectedMeetup].agenda.length===0">Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <MeetupInfo
        :organizer="meetups[selectedMeetup].organizer"
        :place="meetups[selectedMeetup].place"
        :date="meetups[selectedMeetup].date"
      />
          </div>
        </div>
      </UiContainer>
    </div>`,
});