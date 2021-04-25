import {action, makeAutoObservable, observable} from "mobx";
import {MainPageApi} from "../api/MainPageApi";
import {Fee} from "../interfaces/Fee";
import {LatestPublication} from "../interfaces/LatestPublication";
import {Proposal} from "../interfaces/Proposal";
import {User} from "../interfaces/User";
import {Work} from "../interfaces/Work";

export class MainPageStore {
	@observable private works: Work[] = [];
	@observable private filteredInputValue: string = "";
	@observable public filteredWorks: Work[] = [];
	@observable public pagesCount: number = 10;
	@observable public countPerPage: number = 10;
	@observable public currentFirstIndex: number = 0;
	@observable public currentLoggedUser: User | null = null;
	@observable public latestPublications: LatestPublication[] | null = null;
	@observable public proposals: Proposal[] | null = null;
	@observable public fees: Fee[] | null = null;

	constructor() {
		makeAutoObservable(this);

		this.getData();
	}

	private getData = async () => {
		await this.getLoggedUser();
		await this.getYourWorks();
		await this.getLatestPublications();
		await this.getProposals();
		await this.getFees();
	};

	public get resumeYourWorks(): Work[] {
		return this.works || [];
	}

	@action
	public getLoggedUser = async () => {
		this.currentLoggedUser = await MainPageApi.getLoggedUser();
	};

	@action
	public async getYourWorks() {
		this.works = await MainPageApi.getResumeYourWorks();
		this.pagesCount = Math.ceil(this.works.length / this.countPerPage);
	};

	@action
	public async getLatestPublications() {
		if (this.currentLoggedUser) {
			const publications = await MainPageApi.getLatestPublications(this.currentLoggedUser);
			this.latestPublications = publications;
		}
	};

	@action
	public changePage = (page: number) => {
		this.currentFirstIndex = page === 1 ? 0 : (page - 1) * this.countPerPage;
	};

	@action
	public filterWorks = (text: string) => {
		this.filteredInputValue = text;
		this.filteredWorks = this.works.filter(work => work.name.includes(text));
		this.currentFirstIndex = 0;
		this.pagesCount = Math.ceil(this.filteredWorks.length / this.countPerPage);
	};

	@action
	public getProposals = async () => {
		this.proposals = await MainPageApi.getProposals();
	};

	@action
	public getFees = async () => {
		this.fees = await MainPageApi.getFees();
	};
}