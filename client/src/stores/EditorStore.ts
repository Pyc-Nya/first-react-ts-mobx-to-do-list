import React from "react";
import { makeAutoObservable } from "mobx";
import { ITaskData } from "./TaskStore";
import { TaskStore } from "./TaskStore";
import { ActiveStore } from "./ActiveStore";

interface IEditorStoreClass {
  data: ITaskData,
  newTask(): void,
  taskById(data: ITaskData): void,
  updateTitle(e: React.ChangeEvent<HTMLInputElement>): void,
  updateDescription(e: React.ChangeEvent<HTMLTextAreaElement>): void,
}

const initialEditorData: ITaskData = {
  id: 0,
  title: 'New Task',
  description: '',
  date: new Date().toDateString(),
};

class EditorStoreClass implements IEditorStoreClass {
  data: ITaskData = initialEditorData;

  constructor() {
    makeAutoObservable(this);
  }

  newTask = (): void => {
    const lastId: number = TaskStore.globalId;
    this.data = {
      id: lastId + 1,
      title: 'New Task',
      description: '',
      date: new Date().toDateString()
    }
  }

  taskById = (data: ITaskData): void => {
    this.data = Object.assign({}, data);
    ActiveStore.editor();
  }

  updateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.data.description = e.target.value;
  }

  updateTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.data.title = e.target.value;
  }
}

const EditorStore = new EditorStoreClass();

export {
  EditorStore,
  initialEditorData
}
