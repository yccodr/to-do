<template>
  <div @mouseover="active = true" @mouseleave="active = false">
    <label class="menu-btn"></label>
    <div v-show="active" class="color-picker">
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

<style>
div {
  position: relative;
}
.menu-btn {
  cursor: pointer;
  background: url('../assets/color_lens_black_24dp.svg');
  width: 1.5em;
  height: 1.5em;
}
.color-picker {
  display: flex;
  position: absolute;
  top: 2.8em;
  left: -3px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 2em;
  padding: 4px 0;
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
