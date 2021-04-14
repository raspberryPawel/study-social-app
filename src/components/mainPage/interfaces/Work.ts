import {User} from "./User";

export interface Work {
	title: string,
	content: string,
	companyName: string,
	workspaceName: string,
	lastUpdateDate: Date,
	icon: string,
	author: User,
}