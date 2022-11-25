import ListItem from './ListItem';

const TodoListPrototype = {
  list: [],
  defaultItem() {
    return {
      name: '',
      color: 'default',
      category: 'all',
      isDone: false,
    };
  },
  showItem() {
    this.list.forEach((v, k) => {
      this.allList.append(ListItem(k, v, (id) => this.removeItem(id)).DOM);
    });
  },
  async addItem(di = this.defaultItem()) {
    const id = await this.db.addData('list', di);
    const li = ListItem(id, di, this.updateFn.bind(this));

    this.allList.append(li.DOM);
    li.entry.focus();
  },
  removeItem(id) {
    const e = document.getElementById(id);

    e.remove();
    this.db.deleteDataById('list', id);
  },
  updateColor(id, color) {
    this.db.updateDataById('list', id, { color });
  },
  updateName(id, name) {
    this.db.updateDataById('list', id, { name });
  },
  updateStatus(id, status) {
    this.db.updateDataById('list', id, { isDone: status });
  },
  updateFn(action, id, value = undefined) {
    if (action === 'remove') this.removeItem(id);
    else if (action === 'update-color') this.updateColor(id, value);
    else if (action === 'update-name') this.updateName(id, value);
    else if (action === 'update-status') this.updateStatus(id, value);
    else console.error('undefined action');
  },
};

export default function TodoList(db) {
  const obj = Object.create(TodoListPrototype);

  const app = document.getElementById('app');
  const div = document.createElement('div');
  div.classList.add('todo-list');
  app.appendChild(div);

  obj.allList = document.createElement('ul');
  obj.allList.id = 'all';
  div.appendChild(obj.allList);

  obj.db = db;
  db.findAllOrderedById('list').then((array) => {
    array.forEach((item) => {
      const li = ListItem(item.id, item, obj.updateFn.bind(obj));
      obj.allList.appendChild(li.DOM);
    });
  });

  return obj;
}
