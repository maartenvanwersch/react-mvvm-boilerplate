import { RootStore } from "@stores";

export interface ViewModel {
  rootStore: RootStore;
  document: Document;
}