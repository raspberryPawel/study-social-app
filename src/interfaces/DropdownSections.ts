import {ReactElement} from "react";
import {DropdownOption} from "./DropdownOption";

export interface DropdownSections {
	title: string;
	component?: ReactElement;
	options?: DropdownOption[];
}
