import { makeAutoObservable } from "mobx";
import { ViewModel } from "@my-types/interfaces/view-model";
import {RootStore} from "@stores";

export class HomeVm {
  document: Document;
  rootStore: RootStore;
  count: number = 0

  constructor({ document, rootStore }: ViewModel) {
    this.document = document;
    this.rootStore = rootStore;
    makeAutoObservable(this)
  }

  handleCountChange(count: number): void {
    this.count = count;
  }

}