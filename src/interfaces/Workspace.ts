import {Photo} from "./Photo";

export interface Workspace {
	id: string;
	title: string;
	description: string;
	photo: Photo;
	usersCount: number;
	workspaceName: string;
	lastUpdateDate: Date;
	icon: string;
}
