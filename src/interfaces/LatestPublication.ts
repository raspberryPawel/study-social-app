import {Photo} from "./Photo";
import {User} from "./User";

export interface LatestPublication {
	userId: number,
	id: number,
	title: string,
	body: string,
	lastUpdateDate: Date,
	user: User,
	photo: Photo
}