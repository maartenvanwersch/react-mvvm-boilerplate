import { ViewModel } from "../interfaces/viewModel";
import { RootStore } from "../stores/RootStore";

export class BaseVm {
  document: Document;
  rootStore: RootStore;

  constructor({ document, rootStore }: ViewModel) {
    this.document = document;
    this.rootStore = rootStore;
  }
  
}