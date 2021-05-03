import {Photo} from "./Photo";

export interface Entity {
	id: number,
	name: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		}
	},
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
		role: string;
	},
	photo: Photo
}