import './stylesheets/style.css';
import './stylesheets/todolist.css';
import TodoList from './scripts/TodoList';
import ListItem from './scripts/ListItem';

const todoList = TodoList();
todoList.list = [
  {
    id: 1,
    task: '',
    done: false,
    color: 'default',
    tag: 'all',
  },
];

todoList.list.forEach((element) => {
  todoList.allList.append(ListItem(element, (id) => todoList.removeItem(id)).DOM);
});
