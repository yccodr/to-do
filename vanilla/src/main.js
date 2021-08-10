import './stylesheets/style.css';
import './stylesheets/todolist.css';
import TodoList from './scripts/TodoList';

const list = [];

const todoList = TodoList(list);
todoList.showItem();

window.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') todoList.addItem();
  if (ev.key === 'Escape') document.activeElement.blur();
  console.log(ev.key);
});
