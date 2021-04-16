import {User} from "./User";

export interface Work {
	postId: number,
	id: number,
	name: string,
	body: string,
	email: string,
	workspaceName: string,
	lastUpdateDate: Date,
	icon: string,
	user: User,
}