<template>
  <div class="toasts">
    <div v-for="toastItem in toasterList" class="toast" :class="toastItem.class">
      <UiToast :toast-item="toastItem" />
    </div>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data(){
    return{
      toasterClass:null,
      toasterList:[],
      toastItem:null,
    }
  },

  methods: {
    error(message) {
      this.toastItem={
        icon: "alert-circle",
        message: message,
        class: "toast_error"
      }
      this.toasterList.push(this.toastItem);

      setTimeout(() => {
        this.toasterList.shift();
      }, 5000);
    },

    success(message) {
      this.toastItem={
        icon: "check-circle",
        message: message,
        class: "toast_success"
      }
      this.toasterList.push(this.toastItem);

      setTimeout(() => {
        this.toasterList.shift();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
