import {User} from "./User";

export interface Publication {
	title: string,
	date: Date,
	author: User,
	imageUrl: string
}