import { makeAutoObservable } from "mobx";
import { ActiveStore } from "./ActiveStore";

export interface ITaskData {
  id: number,
  title: string,
  description: string,
  date: string,
}

interface ITaskStoreClass {
  tasks: ITaskData[],
  globalId: number
  addTask(data: ITaskData, index: number): void,
  removeTask(id: number): void,
}

class TaskStoreClass implements ITaskStoreClass {
  tasks: ITaskData[] = [];
  globalId: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (data: ITaskData): void => {
    const index: number = this.tasks.findIndex(e => e.id === data.id);
    if (index !== -1) {
      this.tasks[index] = data;
    } else {
      console.log('i didnt found');
      this.tasks.push(data);
      this.globalId++;
    }

    ActiveStore.tasks();
  }

  removeTask = (id: number): void => {
    const index: number = this.tasks.findIndex(e => e.id === id);
    console.log('and in tasks index of this id is:', index);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}

const TaskStore = new TaskStoreClass();

export {
  TaskStore
}