import {makeAutoObservable} from "mobx";
import {AdvancedAccountInfo} from "./AdvancedAccountInfo";
import {MainPageStore} from "./MainPageStore";

class RootStoreClass {
	mainPageStore: MainPageStore;
	advancedAccountInfo: AdvancedAccountInfo;

	constructor() {
		makeAutoObservable(this);

		this.mainPageStore = new MainPageStore();
		this.advancedAccountInfo = new AdvancedAccountInfo();
	}
}

export const RootStore = new RootStoreClass();
