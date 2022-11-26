import './stylesheets/style.css';
import './stylesheets/todolist.css';
import './stylesheets/header.css';
import './stylesheets/sidebar.css';
import DB from './scripts/indexedDB';
import TodoList from './scripts/TodoList';
import indicator from './scripts/SyncIndicator';

const list = [];

const db = new DB('todo', 2, {
  task: '++id, name, color, list, isDone',
  list: '++id, name',
});

const todoList = TodoList(db);
// todoList.showItem();

indicator.init(list);

window.addEventListener('keyup', (ev) => {
  if (ev.target.id === 'new-list-input') return;

  if (ev.key === 'Enter') todoList.addItem();
  if (ev.key === 'Escape') document.activeElement.blur();
});

document.getElementById('btn-add').addEventListener('click', () => {
  todoList.addItem();
});

document.getElementById('btn-list').addEventListener('click', () => {
  document.getElementById('new-list-form').style.visibility = 'visible';
  document.getElementById('new-list-input').focus();
});

document.getElementById('new-list-input').addEventListener('focusout', () => {
  document.getElementById('new-list-form').style.visibility = 'hidden';
});
