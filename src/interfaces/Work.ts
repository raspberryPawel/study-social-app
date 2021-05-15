import {SingleEntitiesFiltersDefinition} from "../consts/EntitiesFiltersDefinitions";
import {User} from "./User";

export interface Work {
	postId: number,
	id: number,
	name: string,
	body: string,
	email: string,
	workspaceName: string,
	workspaceDefinition: SingleEntitiesFiltersDefinition,
	lastUpdateDate: Date,
	icon: string,
	user: User,
}