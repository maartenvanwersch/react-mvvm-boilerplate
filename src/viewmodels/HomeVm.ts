import { action, makeObservable, observable } from "mobx";
import { ViewModel } from "../interfaces/viewModel";
import { BaseVm } from "./BaseVm";

export class HomeVm extends BaseVm {
  count: number = 0

  constructor({ document, rootStore }: ViewModel) {
    super({ document, rootStore });
    makeObservable(this, {
      count: observable,
      handleCountChange: action.bound
    })
  }

  handleCountChange(count: number): void {
    this.count = count;
  }

}