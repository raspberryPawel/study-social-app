import {makeAutoObservable} from "mobx";
import {MainPageStore} from "./MainPageStore";

class RootStoreClass {
	mainPageStore: MainPageStore;

	constructor() {
		makeAutoObservable(this);

		this.mainPageStore = new MainPageStore();
	}
}

export const RootStore = new RootStoreClass();
