import './stylesheets/style.css';
import './stylesheets/todolist.css';
import './stylesheets/header.css';
import TodoList from './scripts/TodoList';
import indicator from './scripts/SyncIndicator';

const list = [];

const todoList = TodoList(list);
todoList.showItem();

indicator.init(list);

window.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') todoList.addItem();
  if (ev.key === 'Escape') document.activeElement.blur();
});

document.getElementById('btn-add').addEventListener('click', () => {
  todoList.addItem();
});
