let list;

const palette = {
    get cascader() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('btn','btn-round','btn-outlined','btn-palette');
        return btn;
    },

    get picker() {
        const div = document.createElement('div');
        div.classList.add('color-pick');

        function createBtn() {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.classList.add('btn','btn-round','btn-color');
            return btn;
        }

        const colors = ['akebono', 'kanzo', 'hiwa', 'usuao', 'mizu', 'usu', 'shironezumi', 'default'];
        colors.forEach((color) => {
            const btn = createBtn();
            btn.classList.add(`color-${color}`);
            btn.addEventListener('click', () => this.changeColor(btn, color));
            div.appendChild(btn);
        });

        return div;
    },

    changeColor: (elem, color) => {
        // console.log(elem);
        const listItem = elem.parentNode.parentNode.parentNode; 

        console.log(listItem.classList);
        listItem.classList.replace(listItem.classList[1], `color-${color}`);
    }
};

const colors = {
    akebono: "#f19483",
    kanzo: "#fc9f4d",
    hiwa: "#bec23f",
    usuao: "#91b493",
    mizu: "#81c7d4",
    usu: "#b28fce",
    shironezumi: "#bdc0ba",
    default: "#fff",
};

class List {
    constructor(id) {
        this.DOM = document.getElementById(id);
        this.emptyItem = false;
    }

    insertItem(item, pos) {
        this.DOM.insertAdjacentElement(pos, item);
        this.emptyItem = true;
    }
}

class Item{
    constructor() {
        this.item = document.createElement('li');
        this.item.classList.add('list-item', 'color-default');
        this.item.style.backgroundColor = colors.default;

        this.createChilds();
        this.createEventListener();
        this.appendToItem();
    }

    createChilds() {
        this.checkBox = document.createElement('input');
        this.checkBox.type = 'checkbox';

        this.textBox = document.createElement('input');
        this.textBox.type = 'text';
        this.textBox.tabIndex = '0';
        this.textBox.placeholder = 'Type Something...';

        this.palette = document.createElement('div');
        this.palette.classList.add('palette');
        this.palette.appendChild(palette.cascader);
        this.palette.appendChild(palette.picker);


        this.delBtn = document.createElement('button');
        this.delBtn.classList.add('btn','btn-round','btn-del');
        this.delBtn.type = 'button';
    }

    createEventListener() {
        this.textBox.addEventListener('blur', () => itemBlurHandler(this.textBox), false);
        this.textBox.addEventListener('keyup', (event) => itemKeyUpHandler(this.textBox, event), false);

        this.delBtn.addEventListener('click', () => delItem(this.delBtn), true);
    }

    appendToItem() {
        this.item.appendChild(this.checkBox);
        this.item.appendChild(this.textBox);
        this.item.appendChild(this.palette);
        this.item.appendChild(this.delBtn);
    }

    appendToList(pos, target) {
        target.insertAdjacentElement(pos, this.item);
    }
}

function addItem(pos, target, focus=false){
    const node = new Item();
    node.appendToList(pos, target);
    console.log(list);
    if(focus) node.textBox.focus();
}

function delItem(elem) {
    elem.parentNode.remove();
}

function itemBlurHandler(elem) {
    elem.value = elem.value.trim();
    console.log(document.activeElement.tagName);
    if(elem.value === '') {
        elem.parentNode.remove();
        return;
    }

    list.emptyItem = false;
}

function itemKeyUpHandler(elem, event) {
    if(elem.value === '') return;
    if(event.keyCode === 13) {
        const lastListItem = document.querySelector('li:last-child');
        if(elem.parentNode.nextSibling === lastListItem){
            lastListItem.children[1].focus();
            return;
        }
        addItem('afterend', elem.parentNode, true);
    }
}

window.onload = () => {
    list = new List('todo-list');
    // addItem('beforeend', document.getElementById('todo-list'));
    document.body.addEventListener('click', () => {
        if(list.emptyItem) return;
        const item = new Item();
        // console.log(document.activeElement);
        list.insertItem(item.item, 'beforeend');
        item.textBox.focus();
    }, false);
}