<template>
  <div
    id="sync-indicator"
    @click="mockSyncing"
    :class="[isLoading ? loadClass.loading : loadClass.done]"
  ></div>
</template>

<script>
import { toRaw } from 'vue';

export default {
  props: ['list'],
  data() {
    return {
      isLoading: false,
      loadClass: {
        loading: 'sync-indicator-loading',
        done: 'sync-indicator-done',
      },
    };
  },
  methods: {
    mockSyncing() {
      this.isLoading = true;
      console.log(toRaw(this.list.items));
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style>
/*
  sync indicator
*/
#sync-indicator {
  float: right;
  width: 24px;
  height: 24px;
}

.sync-indicator-done {
  background: url(../assets/cloud_done_black_24dp.svg);
}

.sync-indicator-loading {
  background: url(../assets/sync_black_24dp.svg);
  animation: spin 1.5s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(-360deg);
  }
}
</style>
