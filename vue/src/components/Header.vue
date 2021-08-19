<template>
  <header>
    <a href="." class="site-title">Todo List</a>
    <SyncIndicator :list="list" />
    <button type="button" class="btn-add" id="btn-add" @click="addEmptyItem">&#43;</button>
  </header>
</template>

<script setup>
import { inject } from 'vue';
import SyncIndicator from './SyncIndicator.vue';
</script>

<script>
export default {
  data() {
    return {
      list: inject('list'),
      addEmptyItem: inject('addEmptyItem'),
    };
  },
};
</script>

<style scoped>
/*
  Header
*/
header {
  background-color: #f2cb05;
  padding: 0.5em 1em;
}

.site-title {
  display: inline-block;
  color: #fff;
  font: normal 600 24px/24px monospace;
  text-decoration: none;
}

/*
  Add Button
*/
.btn-add {
  float: right;
  border: 0;
  background: 0;
  font: normal 600 24px/24px monospace;
  color: #fff;
  padding: 0;
  margin-right: 1em;
}
</style>
