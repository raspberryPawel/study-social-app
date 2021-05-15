import {SvgIconTypeMap} from "@material-ui/core";
import {green, grey, lightBlue, yellow} from "@material-ui/core/colors";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import DescriptionIcon from "@material-ui/icons/Description";
import DomainIcon from "@material-ui/icons/Domain";
import ForumIcon from "@material-ui/icons/Forum";
import PeopleIcon from "@material-ui/icons/People";

export interface SingleEntitiesFiltersDefinition {
	name: EntitiesFiltersName;
	color: string;
	icon: OverridableComponent<SvgIconTypeMap> | null;
}

export enum EntitiesFiltersName {
	ALL = "All",
	SAS = "SAS",
	SARL = "SARL",
	SECONDARY_BUSINESS = "Secondary business",
	COMMUNITIES = "Communities",
	POA = "POA",
	SURVEY = "Survey",
}

export const EntitiesFiltersDefinitions: SingleEntitiesFiltersDefinition[] = [
	{
		icon: null,
		color: grey["400"],
		name: EntitiesFiltersName.ALL,
	},
	{
		icon: DomainIcon,
		color: green["400"],
		name: EntitiesFiltersName.SAS,
	},
	{
		icon: DomainIcon,
		color: lightBlue["400"],
		name: EntitiesFiltersName.SARL,
	},
	{
		icon: DomainIcon,
		color: yellow["400"],
		name: EntitiesFiltersName.SECONDARY_BUSINESS,
	},
	{
		icon: ForumIcon,
		color: grey["400"],
		name: EntitiesFiltersName.COMMUNITIES,
	},
	{
		icon: DescriptionIcon,
		color: grey["400"],
		name: EntitiesFiltersName.POA,
	},
	{
		icon: PeopleIcon,
		color: grey["400"],
		name: EntitiesFiltersName.SURVEY,
	},
];
