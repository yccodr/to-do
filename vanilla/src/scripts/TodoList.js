import ListItem from './ListItem';
import { CreateCategoryItem, ShowCategoryItems } from './CategoryItem';

const TodoListPrototype = {
  currentList: 0,
  defaultItem() {
    return {
      name: '',
      color: 'default',
      list: this.currentList,
      isDone: false,
    };
  },
  showItem() {
    while (this.allList.lastElementChild) {
      this.allList.removeChild(this.allList.lastElementChild);
    }

    this.db.findAllOrderedById('task').then((array) => {
      array.forEach((item) => {
        if (this.currentList !== 0 && item.list !== this.currentList) return;
        const li = ListItem(item.id, item, this.updateFn.bind(this));
        this.allList.appendChild(li.DOM);
      });
    });
  },
  async addItem(di = this.defaultItem()) {
    const id = await this.db.addData('task', di);
    const li = ListItem(id, di, this.updateFn.bind(this));

    this.allList.append(li.DOM);
    li.entry.focus();
  },
  removeItem(id) {
    const e = document.getElementById(id);

    e.remove();
    this.db.deleteDataById('task', id);
  },
  addList(name) {
    this.db.addData('list', { name }).then((id) => {
      CreateCategoryItem(id, name, this.updateFn.bind(this));
    });
  },
  setList(list) {
    document.getElementById(`list-${this.currentList}`).classList.remove(['task-list__selected']);

    this.currentList = list;
    this.showItem();
    document.getElementById(`list-${list}`).classList.add(['task-list__selected']);
  },
  updateColor(id, color) {
    this.db.updateDataById('task', id, { color });
  },
  updateName(id, name) {
    this.db.updateDataById('task', id, { name });
  },
  updateStatus(id, status) {
    this.db.updateDataById('task', id, { isDone: status });
  },
  updateFn(action, id, value = undefined) {
    if (action === 'remove') this.removeItem(id);
    else if (action === 'update-color') this.updateColor(id, value);
    else if (action === 'update-name') this.updateName(id, value);
    else if (action === 'update-status') this.updateStatus(id, value);
    else if (action === 'set-list') this.setList(id);
    else console.error('undefined action');
  },
};

export default function TodoList(db) {
  const obj = Object.create(TodoListPrototype);
  obj.db = db;

  const app = document.getElementById('app');
  const div = document.createElement('div');
  div.classList.add('todo-list');
  app.appendChild(div);

  obj.allList = document.createElement('ul');
  obj.allList.id = 'all';
  div.appendChild(obj.allList);
  obj.showItem();

  CreateCategoryItem(0, 'all', obj.updateFn.bind(obj));

  db.findAllOrderedById('list').then((keys) => {
    ShowCategoryItems(keys, obj.updateFn.bind(obj));
  });

  document.getElementById('new-list-form').addEventListener('submit', (ev) => {
    ev.preventDefault();

    const input = document.getElementById('new-list-input');
    if (input.value === '') return;
    obj.addList(input.value);
    input.value = '';
    input.blur();
  });

  obj.setList(0);

  return obj;
}
