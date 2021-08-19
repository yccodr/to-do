<template>
  <div id="todo-list">
    <ListItem
      v-for="(item, index) in items"
      :key="index"
      v-model:task-name="item.taskName"
      v-model:done="item.done"
      v-model:color="item.color"
      :del="() => delItem(index)"
    ></ListItem>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import ListItem from './ListItem.vue';
</script>

<script>
export default {
  name: 'TodoList',
  components: {
    ListItem,
  },
  data() {
    return {
      items: inject('list').items,
      delItem: inject('delItem'),
    };
  },

  created() {
    const addEmptyItem = inject('addEmptyItem');
    window.addEventListener('keyup', (ev) => {
      if (ev.key === 'Enter') {
        addEmptyItem();
      }
    });
  },
};
</script>

<style scoped>
* {
  max-width: 600px;
  margin: auto;
}

#todo-list {
  margin-top: 1em;
}
</style>
