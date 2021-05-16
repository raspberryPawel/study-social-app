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
	public addNewFilterDefinition = (definition: FilterDefinition) => {
		this.filterDefinitions.push(definition);
		this.nextFilterId++;
	};

	@action
	public changeFilterInputValue = (value: string) => {
		this.filterInputValue = value;
		this.filteredEntities = (this.entities || []).filter((entity) => entity.name.includes(value));
	};

	@action
	protected getCondition = (id: number): FilterDefinition | undefined => {
		return this.filterDefinitions.find((definition) => definition.id === id);
	};

	@action
	public removeFilterDefinition = (id: number) => {
		const filterDefinitionIndex = this.filterDefinitions.findIndex(
			(filterDefinition: FilterDefinition) => filterDefinition.id === id
		);

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
		});
	};
}
