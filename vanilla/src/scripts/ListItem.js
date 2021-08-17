import colors from './colors';

const ListItemPrototype = {
  setColor(color) {
    this.item.color = color;
    this.DOM.style.cssText = `--bg-color-checkbox: ${colors[color]}`;
  },
  checkbox(done) {
    const e = document.createElement('input');
    e.id = 'checkbox';
    e.type = 'checkbox';
    e.checked = done;
    e.addEventListener('input', () => {
      this.item.done = e.checked;
    });

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
    e.addEventListener('input', (ev) => {
      this.item.task = ev.target.value;
    });
    e.addEventListener('focusout', (ev) => {
      if (ev.target.value === '') this.removeItem(this.id);
    });
    e.addEventListener('keydown', (ev) => {
      if (ev.shiftKey && ev.key === 'Delete') this.removeItem(this.id);
    });

    this.entry = e;
    return e;
  },
  colorPicker() {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.tabIndex = '0';
    label.classList.add('menu-btn');
    div.classList.add('color-picker');

    const picker = document.createElement('div');

    div.appendChild(label);
    div.appendChild(picker);

    Object.entries(colors).forEach(([key, value]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.backgroundColor = value;
      btn.tabIndex = '-1';
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
    this.DOM.appendChild(this.checkbox(this.item.done));
    this.DOM.appendChild(this.label());
    this.DOM.appendChild(this.textInput(this.item.task));
    this.DOM.appendChild(this.colorPicker());
    this.DOM.appendChild(this.delBtn());
  },
};

export default function ListItem(id, item, removeItem) {
  ListItemPrototype.removeItem = removeItem;
  const obj = Object.create(ListItemPrototype);

  obj.DOM = document.createElement('li');
  obj.DOM.id = id;
  obj.id = id;
  obj.item = item;
  obj.setColor(item.color);

  obj.compose();

  return obj;
}
