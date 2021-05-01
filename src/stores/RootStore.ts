import {makeAutoObservable} from "mobx";
import {AdvancedAccountInfo} from "./AdvancedAccountInfo";
import {EntitiesStore} from "./EntitiesStore";
import {MainPageStore} from "./MainPageStore";

class RootStoreClass {
	mainPageStore: MainPageStore;
	advancedAccountInfo: AdvancedAccountInfo;
	entitiesStore: EntitiesStore;

	constructor() {
		makeAutoObservable(this);

		this.mainPageStore = new MainPageStore();
		this.advancedAccountInfo = new AdvancedAccountInfo();
		this.entitiesStore = new EntitiesStore();
	}
}

export const RootStore = new RootStoreClass();
