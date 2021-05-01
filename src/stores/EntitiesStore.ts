import {action, makeAutoObservable, observable} from "mobx";
import {EntitiesApi} from "../api/EntitiesApi";
import {Entity} from "../interfaces/Entity";

export class EntitiesStore {
	@observable public entities: Entity[] | null = null;
	@observable public filteredEntities: Entity[] | null = null;
	@observable public pagesCount: number = 10;
	@observable public countPerPage: number = 10;
	@observable public currentFirstIndex: number = 0;

	constructor() {
		makeAutoObservable(this);

		this.getData();
	}

	private getData = async () => {
		await this.getEntities();
	};

	@action
	public changePage = (page: number) => {
		this.currentFirstIndex = page === 1 ? 0 : (page - 1) * this.countPerPage;
	};

	@action
	public getEntities = async () => {
		this.entities = await EntitiesApi.getEntities();
		this.pagesCount = Math.ceil(this.entities.length / this.countPerPage);
	};
}