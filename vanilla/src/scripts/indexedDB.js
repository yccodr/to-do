import 'https://unpkg.com/dexie@3.2.2/dist/dexie.js';

export default class DB {
  constructor(dbName, version, stores) {
    this.db = new Dexie(dbName);

    this.db.version(version).stores(stores);
  }

  async addData(storeName, data) {
    return this.db.table(storeName).put(data);
  }

  updateDataById(storeName, id, data) {
    this.db.table(storeName).update(id, data);
  }

  deleteDataById(storeName, id) {
    this.db.table(storeName).delete(id);
  }

  async findAllOrderedById(storeName) {
    return this.db.table(storeName).orderBy('id').toArray();
  }
}
