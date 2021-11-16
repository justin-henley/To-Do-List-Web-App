export default class ToDoItem {
  #item;
  #id;

  constructor(id = null, item = null) {
    this.#id = id;
    this.#item = item;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get item() {
    return this.#item;
  }

  set item(item) {
    this.#item = item;
  }

  toPublicObject() {
    return {
      id: this.#id,
      item: this.#item,
    };
  }
}
