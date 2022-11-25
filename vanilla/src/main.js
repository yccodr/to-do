import './stylesheets/style.css';
import './stylesheets/todolist.css';
import './stylesheets/header.css';
import DB from './scripts/indexedDB';
import TodoList from './scripts/TodoList';
import indicator from './scripts/SyncIndicator';

const list = [];
const currentList = 'all';

const db = new DB('todo', 1, {
  list: '++id, name, color, category, isDone',
});

const todoList = TodoList(db);
// todoList.showItem();

indicator.init(list);

window.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') todoList.addItem();
  if (ev.key === 'Escape') document.activeElement.blur();
});

document.getElementById('btn-add').addEventListener('click', () => {
  todoList.addItem();
});
