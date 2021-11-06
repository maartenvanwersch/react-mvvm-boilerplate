import { ViewModel } from "../interfaces/viewModel";
import { RootStore } from "../stores/RootStore";

export class BaseVm {
  _document: Document;
  _rootStore: RootStore;

  constructor({ document, rootStore }: ViewModel) {
    this._document = document;
    this._rootStore = rootStore;
  }
  
}