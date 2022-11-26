export async function CreateCategoryItem(id, name, callback) {
  const list = document.querySelector('.task-list ul');
  const listitem = document.createElement('li');
  listitem.id = `list-${id}`;
  listitem.textContent = name;

  listitem.addEventListener('click', () => {
    callback('set-list', id);
  });

  list.appendChild(listitem);
}

export function ShowCategoryItems(items, callback) {
  const list = document.querySelector('.task-list ul');

  items.forEach((item) => {
    const listitem = document.createElement('li');
    listitem.textContent = item.name;
    listitem.id = `list-${item.id}`;
    listitem.addEventListener('click', () => {
      callback('set-list', item.id);
    });
    list.appendChild(listitem);
  });
}
