import {Photo} from "./Photo";
import {Address} from "./Address";
import {Company} from "./Company";

export interface Entity {
	id: number;
	name: string;
	address: Address;
	company: Company;
	photo: Photo;
}
