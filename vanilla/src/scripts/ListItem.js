import colors from './colors';

const ListItemPrototype = {
  setColor(color) {
    this.color = color;
    this.DOM.style.cssText = `--bg-color-checkbox: ${colors[color]}`;
  },
  checkbox(done) {
    const e = document.createElement('input');
    e.id = 'checkbox';
    e.type = 'checkbox';
    e.checked = done;

    return e;
  },
  label() {
    const e = document.createElement('label');
    e.htmlFor = 'checkbox';
    e.classList.add('checkbox');
    return e;
  },
  textInput(task) {
    const e = document.createElement('input');
    e.type = 'text';
    e.placeholder = 'Type Something...';
    e.value = task;

    return e;
  },
  colorPicker() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.classList.add('menu-btn');
    div.classList.add('color-picker');

    const picker = document.createElement('div');

    div.appendChild(label);
    div.appendChild(picker);

    Object.entries(colors).forEach(([key, value]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.backgroundColor = value;
      picker.appendChild(btn);

      btn.addEventListener('click', () => {
        this.setColor(key);
      });
    });

    return div;
  },
  delBtn() {
    const e = document.createElement('button');
    e.type = 'button';
    e.classList.add('delBtn');
    e.innerHTML = '&#10006;';
    e.addEventListener('click', () => {
      this.removeItem(this.id);
    });

    return e;
  },
  compose() {
    this.DOM.appendChild(this.checkbox(this.done));
    this.DOM.appendChild(this.label());
    this.DOM.appendChild(this.textInput(this.task));
    this.DOM.appendChild(this.colorPicker());
    this.DOM.appendChild(this.delBtn());
  },
};

export default function ListItem(item, removeItem) {
  ListItemPrototype.removeItem = removeItem;
  const obj = Object.create(ListItemPrototype);

  obj.DOM = document.createElement('li');
  obj.DOM.id = item.id;
  obj.id = item.id;
  obj.task = item.task;
  obj.done = item.done;
  obj.tag = item.tag;
  obj.setColor(item.color);

  obj.compose();

  return obj;
}
