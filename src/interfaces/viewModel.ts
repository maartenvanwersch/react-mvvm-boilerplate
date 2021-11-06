import { RootStore } from "../stores/RootStore";

export interface ViewModel {
  rootStore: RootStore;
  document: Document;
}