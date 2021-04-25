import {action, makeAutoObservable, observable} from "mobx";
import {AdvancedAccountInfoApi} from "../api/AdvancedAccountInfoApi";
import {Fee} from "../interfaces/Fee";
import {Proposal} from "../interfaces/Proposal";

export class AdvancedAccountInfo {
	@observable public proposals: Proposal[] | null = null;
	@observable public fees: Fee[] | null = null;

	constructor() {
		makeAutoObservable(this);

		this.getData();
	}

	private getData = async () => {
		await this.getProposals();
		await this.getFees();
	};

	@action
	public getProposals = async () => {
		this.proposals = await AdvancedAccountInfoApi.getProposals();
	};

	@action
	public getFees = async () => {
		this.fees = await AdvancedAccountInfoApi.getFees();
	};
}