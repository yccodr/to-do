import './stylesheets/style.css';
import './stylesheets/todolist.css';
import './stylesheets/save-indicator.css';
import TodoList from './scripts/TodoList';
import indicator from './scripts/SaveIndicator';

const list = [];

const todoList = TodoList(list);
todoList.showItem();

indicator.init(list);

window.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') todoList.addItem();
  if (ev.key === 'Escape') document.activeElement.blur();
});
