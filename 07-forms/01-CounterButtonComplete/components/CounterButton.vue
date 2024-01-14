<template>
  <button @click="increment">{{ localCount }}</button>
</template>

<script>
import { dequal } from 'dequal';

export default {
  name: 'CounterButton',

  props:{
    count: {
            type: Number,
            default: 0,
        },
  },

  data() {
    return {
      localCount: undefined,
    };
  },

emits:['update:count'],

methods:{
  increment(){
    return this.localCount += 1;
  }
},

watch:{

  count: {
        immediate: true,
        handler() {
          this.localCount = this.count;
        },
      },

      localCount() {
        this.$emit('update:count', this.localCount);
      },
}
};
</script>
