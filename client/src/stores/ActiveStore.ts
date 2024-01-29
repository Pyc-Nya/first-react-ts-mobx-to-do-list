import { makeAutoObservable } from "mobx";
import { EditorStore } from "./EditorStore";
import { initialEditorData } from "./EditorStore";

interface IActiveStoreClass {
  active: string,
  editor(): void,
  tasks(): void,
}

class ActiveStoreClass implements IActiveStoreClass {
  active: string = 'tasks';

  constructor() {
    makeAutoObservable(this);
  }

  editor = (): void => {
    this.active = 'editor';
  }

  tasks = (): void => {
    this.active = 'tasks';
    EditorStore.data = initialEditorData;
  }
}

const ActiveStore = new ActiveStoreClass();

export {
  ActiveStore
}
