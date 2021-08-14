<template>
  <div class="container">
    <label class="menu-btn"></label>
    <div class="color-picker">
      <button
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
        @click="changeColor(color)"
      ></button>
    </div>
  </div>
</template>

<script>
import colors from '../assets/colors';

export default {
  props: {
    itemColor: String,
  },
  emits: ['update:itemColor'],
  methods: {
    changeColor(value) {
      this.$emit('update:itemColor', value);
    },
  },
  data() {
    return {
      colors,
      active: false,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
.menu-btn {
  cursor: pointer;
  background: url('../assets/color_lens_black_24dp.svg');
  width: 1.5em;
  height: 1.5em;
}
.color-picker {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  max-width: 0;
  background-color: white;
  box-sizing: border-box;
  border: 0.1px solid gray;
  border-radius: 2em;
  padding: 4px 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.container:hover .color-picker {
  max-width: 196px;
  opacity: 100;
}

.color-picker button {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  margin-right: 4px;
}

.color-picker button:first-child {
  margin-left: 4px;
}
</style>
