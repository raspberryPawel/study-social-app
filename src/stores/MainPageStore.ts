import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {MainPageApi} from "../api/MainPageApi";
import {EntitiesFiltersName} from "../consts/EntitiesFiltersDefinitions";
import {LatestPublication} from "../interfaces/LatestPublication";
import {User} from "../interfaces/User";
import {Work} from "../interfaces/Work";
import {Workspace} from "../interfaces/Workspace";
import {defaultSection} from "../consts/DropdownSections";
import {DropdownOption} from "../interfaces/DropdownOption";

export class MainPageStore {
	@observable private works: Work[] = [];
	@observable private filteredInputValue: string = "";
	@observable public filteredWorks: Work[] = [];
	@observable public currentLoggedUser: User | null = null;
	@observable public latestPublications: LatestPublication[] | null = null;

	@observable public currentDropdownOption: DropdownOption = defaultSection;

	//workspaces
	@observable public workspaces: Workspace[] = [];
	@observable public workspacesFilters: EntitiesFiltersName[] = [EntitiesFiltersName.ALL];

	constructor() {
		makeAutoObservable(this);

		this.getData();
	}

	@action
	private getData = async () => {
		await this.getLoggedUser();
		await this.getYourWorks();
		await this.getWorkspaces();
		await this.getLatestPublications();
	};

	public get resumeYourWorks(): Work[] {
		return this.works || [];
	}

	@action
	public getLoggedUser = async () => {
		const currentLoggedUser = await MainPageApi.getLoggedUser();

		runInAction(() => {
			this.currentLoggedUser = currentLoggedUser;
		});
	};

	@action
	public async getYourWorks() {
		const works = await MainPageApi.getResumeYourWorks();

		runInAction(() => {
			this.works = works;
		});
	}

	@action
	public async getWorkspaces() {
		const workspaces = await MainPageApi.getWorkspaces();

		runInAction(() => {
			this.workspaces = workspaces;
		});
	}

	@action
	public async getLatestPublications() {
		if (this.currentLoggedUser) {
			const publications = await MainPageApi.getLatestPublications(this.currentLoggedUser);

			runInAction(() => {
				this.latestPublications = publications;
			});
		}
	}

	@action
	public filterWorks = (text: string) => {
		this.filteredInputValue = text;
		this.filteredWorks = this.works.filter((work) => work.name.toLowerCase().includes(text.toLowerCase()));
	};

	@action
	public changeWorkspaceTitle = (id: string, value: string) => {
		const workspace = this.workspaces.find((workspace) => workspace.id === id);

		if (workspace) workspace.title = value;
	};

	@action
	public changeWorkspaceDescription = (id: string, value: string) => {
		const workspace = this.workspaces.find((workspace) => workspace.id === id);

		if (workspace) workspace.description = value;
	};

	@action
	public addOrRemoveWorkspaceFilter = (name: EntitiesFiltersName) => {
		let filters = [...this.workspacesFilters];
		const index = filters.indexOf(name);

		if (name === EntitiesFiltersName.ALL) {
			if (index !== -1 && filters.length === 1) filters = [];
			else if (index !== -1 && filters.length > 1) filters.splice(index, 1);
			else filters = [name];
		} else {
			if (index !== -1) filters.splice(index, 1);
			else filters.push(name);
		}

		this.workspacesFilters = filters;
	};

	@action
	public changeCurrentDropdownSection = (section: DropdownOption) => {
		this.currentDropdownOption = section;
	};
}
