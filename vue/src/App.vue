<template>
  <div>
    <Header :list="list" />
    <TodoList :list="list" />
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue';
import TodoList from './components/TodoList.vue';
import Header from './components/Header.vue';
import colors from './assets/colors';

class Item {
  constructor() {
    this.taskName = '';
    this.done = false;
    this.color = colors.default;
  }
}

const list = reactive({
  items: [],
});

provide('list', list);
provide('Item', Item);
provide('colors', colors);
provide('addEmptyItem', () => {
  list.items.push(new Item());
});
provide('delItem', (index) => {
  list.items.splice(index, 1);
});

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* custom */
html,
body {
  height: 100%;
  background-color: #f2f2f2;

  /* remove space at the top */
  position: absolute;
  width: 100%;
  margin: 0 auto;
}
</style>
