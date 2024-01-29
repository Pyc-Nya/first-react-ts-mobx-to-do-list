import { makeAutoObservable } from "mobx";
import React from "react";

interface ISearchStoreClass {
  input: string,
  updateInput(e: React.ChangeEvent<HTMLInputElement>): void,
  clearInput(): void,
}

class SearchStoreClass implements ISearchStoreClass {
  input: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.input = e.target.value;
  }

  clearInput = (): void => {
    this.input = '';
  }
}

const SearchStore = new SearchStoreClass();

export {
  SearchStore
}
