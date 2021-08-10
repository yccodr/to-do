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
  removeItem(id) {
    const idx = this.list.findIndex((e) => e.id === id);
    const e = document.getElementById(id);

    this.list.splice(idx, 1);
    e.remove();
  },
};

export default function TodoList() {
  const obj = Object.create(TodoListPrototype);

  const app = document.getElementById('app');
  const div = document.createElement('div');
  div.classList.add('todo-list');
  app.appendChild(div);

  obj.allList = document.createElement('ul');
  obj.allList.id = 'all';
  div.appendChild(obj.allList);

  return obj;
}
