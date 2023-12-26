<template>
  <UiIcon class="toast__icon" :icon="toastItem.icon" />
  <span>{{ toastItem.message }}</span>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',

  components: { UiIcon },

  props:{
    toastItem: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style scoped>
</style>
