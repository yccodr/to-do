<template>
  <div :style="{ '--bg-color-checkbox': color }">
    <input type="checkbox" v-model="isDone" id="isdone" class="checkbox" />
    <label for="isdone"></label>

    <input type="text" name="task-name" v-model="name" placeholder="Type Something..." />
    <color-picker v-model:item-color="__color"></color-picker>
    <button type="button" @click="del()">&#10006;</button>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker.vue';

export default {
  components: { ColorPicker },
  name: 'ListItem',
  props: {
    taskName: String,
    done: Boolean,
    color: String,
    del: Function,
  },
  emits: ['update:taskName', 'update:done', 'update:color'],
  computed: {
    name: {
      get() {
        return this.taskName;
      },
      set(value) {
        this.$emit('update:taskName', value);
      },
    },
    isDone: {
      get() {
        return this.done;
      },
      set(value) {
        this.$emit('update:done', value);
      },
    },
    __color: {
      get() {
        return this.color;
      },
      set(value) {
        this.$emit('update:color', value);
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* container */
div {
  display: flex;
  align-items: center;
  height: 3.5em;
}

/* input */
input {
  font: 200 1.5em/2em 'Sans', serif;
  border: 0;
  margin-left: 0.5em;
  outline: none;
  height: 100%;
}

/* text input */
[type='text'] {
  flex: auto;
}

/* checkbox */
[type='checkbox'] {
  display: none;
}

[type='checkbox'] + label {
  display: inline-block;
  flex: 1;
  height: 1.5em;
  max-width: 1.5em;
  padding: 1px;
  border-radius: 50%;
  border: 2px var(--bg-color-checkbox) solid;
}

[type='checkbox']:checked + label {
  background: no-repeat url('../assets/done_black_24dp.svg');
  background-color: var(--bg-color-checkbox);
}

/* del btn */
button {
  flex: 1;
  font-size: inherit;
  cursor: pointer;
  background: 0;
  border: 1px solid gray;
  border-radius: 50%;
  height: 1.5em;
  max-width: 1.5em;
  margin-left: 0.6em;
}
</style>
