import ListItem from './ListItem';

const TodoListPrototype = {
  list: [],
  defaultItem() {
    return Object.create({
      task: '',
      done: false,
      color: 'default',
      tag: 'all',
    });
  },
  showItem() {
    this.list.forEach((v, k) => {
      this.allList.append(ListItem(k, v, (id) => this.removeItem(id)).DOM);
    });
  },
  addItem(di = this.defaultItem()) {
    const li = ListItem(this.list.length, di, (id) => this.removeItem(id));

    this.list.push(di);
    this.allList.append(li.DOM);
    li.entry.focus();
  },
  removeItem(id) {
    const e = document.getElementById(id);

    e.remove();
    this.list.splice(id, 1);
  },
};

export default function TodoList(list) {
  const obj = Object.create(TodoListPrototype);

  const app = document.getElementById('app');
  const div = document.createElement('div');
  div.classList.add('todo-list');
  app.appendChild(div);

  obj.list = list;
  obj.allList = document.createElement('ul');
  obj.allList.id = 'all';
  div.appendChild(obj.allList);

  return obj;
}
