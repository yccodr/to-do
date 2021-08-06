<template>
  <div id="todo-list">
    <ListItem
      v-for="(item, index) in items"
      :key="index"
      v-model:task-name="item.taskName"
      v-model:done="item.done"
      v-model:color="item.color"
      :del="(index) => delItem(index)"
    ></ListItem>
  </div>
</template>

<script setup>
import ListItem from './ListItem.vue';
</script>

<script>
import colors from '../assets/colors';

class Item {
  constructor() {
    this.taskName = '';
    this.done = false;
    this.color = colors.akebono;
  }
}

export default {
  name: 'TodoList',
  components: {
    ListItem,
  },
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.addEmptyItem();
  },

  methods: {
    addEmptyItem() {
      this.items.push(new Item());
    },
    delItem(index) {
      this.items.splice(index, 1);
    },
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
