import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupAgenda from './MeetupAgenda.js';
//import meetups from '../api/meetups.js';

export default defineComponent({
    name: 'MeetupView',
    //meetups,

    components: {
        UiAlert,
        UiContainer,
        MeetupDescription,
        MeetupCover,
        MeetupInfo,
        MeetupAgendaItem,
        MeetupAgenda
    },

    props: {
        meetup: {
            type: Object,
            required: true,
        },
    },

    template: `
    <div>
      <!-- meetup cover-->
      <MeetupCover :title="meetup.title" :image="meetup.image" />
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="meetup.description" />
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <MeetupAgenda :agenda="meetup.agenda" />
            <UiAlert v-if="meetup.agenda.length===0">Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <MeetupInfo
        :organizer="meetup.organizer"
        :place="meetup.place"
        :date="meetup.date"
      />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
