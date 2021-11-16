export default class ToDoList {
  #list;

  constructor() {
    this.#list = [];
  }

  get list() {
    return this.#list;
  }

  clearList() {
    this.#list = [];
  }

  addItemToList(itemObj) {
    this.#list.push(itemObj);
  }

  removeItemFromList(itemId) {
    const list = this.#list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == itemId) {
        list.splice(i, 1);
        break;
      }
    }
  }

  toPublicList() {
    const publicList = [];
    this.#list.forEach((itemObj) => {
      publicList.push(itemObj.toPublicObject());
    });

    return publicList;
  }
}
