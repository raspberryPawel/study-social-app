import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {EntitiesApi} from "../api/EntitiesApi";
import {Condition} from "../consts/Condition";
import {FilterByProperty} from "../consts/FilterByProperty";
import {LogicalOperation} from "../consts/LogicalOperation";
import {Entity} from "../interfaces/Entity";
import {FilterDefinition} from "../interfaces/FilterDefinition";

export class EntitiesStore {
	@observable public entities: Entity[] = [];
	@observable public filteredEntities: Entity[] = [];
	@observable public filterInputValue: string = "";
	@observable public filterDefinitions: FilterDefinition[] = [];
	@observable public pagesCount: number = 10;
	@observable public countPerPage: number = 10;
	@observable public currentFirstIndex: number = 0;
	@observable public nextFilterId: number = 0;

	constructor() {
		makeAutoObservable(this);

		this.getData();
	}

	@action
	private getData = async () => {
		await this.getEntities();
	};

	@action
	public changePage = (page: number) => {
		this.currentFirstIndex = page === 1 ? 0 : (page - 1) * this.countPerPage;
	};

	@action
	public addNewFilterDefinition = (definition: FilterDefinition) => {
		this.filterDefinitions.push(definition);
		this.nextFilterId++;
	};

	@action
	public changeFilterInputValue = (value: string) => {
		this.filterInputValue = value;

		this.filteredEntities = (this.entities || []).filter(entity => entity.name.includes(value));
		this.currentFirstIndex = 0;
		this.pagesCount = Math.ceil(this.filteredEntities.length / this.countPerPage);
	};

	@action
	protected getCondition = (id: number): FilterDefinition | undefined => {
		return this.filterDefinitions.find((definition) => definition.id === id);
	};

	@action
	public removeFilterDefinition = (id: number) => {
		const filterDefinitionIndex = this.filterDefinitions.findIndex(
			(filterDefinition: FilterDefinition) => filterDefinition.id === id);

		this.filterDefinitions.splice(filterDefinitionIndex, 1);
	};

	@action
	public changeFilterDefinitionInputValue = (id: number, conditionName: string, value: string) => {
		const filterDefinition = this.getCondition(id);
		if (filterDefinition) {
			filterDefinition.condition.conditionValue[conditionName] = value;
		}
	};

	@action
	public changeCondition = (id: number, condition: Condition) => {
		const filterDefinition = this.getCondition(id);
		if (filterDefinition) filterDefinition.condition.conditionName = condition;
	};

	@action
	public changeFilterByProperty = (id: number, filterByProperty: FilterByProperty) => {
		const filterDefinition = this.getCondition(id);
		if (filterDefinition) filterDefinition.filterByProperty = filterByProperty;
	};

	@action
	public changeLogicalOperation = (id: number, logicalOperation: LogicalOperation) => {
		const filterDefinition = this.getCondition(id);
		if (filterDefinition) filterDefinition.logicalOperation = logicalOperation;
	};

	@action
	public getEntities = async () => {
		const entities = await EntitiesApi.getEntities();

		runInAction(() => {
			this.entities = entities;
			this.pagesCount = Math.ceil(entities.length / this.countPerPage);
		});
	};
}