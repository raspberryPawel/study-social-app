import {TextField} from "@material-ui/core";
import React, {ChangeEvent, FC, useState} from "react";

import {ButtonElement} from "../../../../common/ButtonElement";
import {CustomScrollbar} from "../../../../common/CustomScrollbar";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import {DropdownOption} from "../../interfaces/DropdownOption";
import {DropdownSections} from "../../interfaces/DropdownSections";
import "./DropdownView.scss";

interface IProps {
	dropdownSections: DropdownSections[];
	changeSelectedOption: (selectedOption: DropdownOption) => void
}

export const DropdownView: FC<IProps> = props => {
	const [value, changeValue] = useState<string>("");
	const {dropdownSections} = props;

	const onChange = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;

		changeValue(inputValue);
	};

	const createSection = (section: DropdownSections) => {
		return (
			<div>
				{!section.options && <SectionSeparator />}
				<p className={"sectionTitle"}>{section.title}</p>

				{section.options
					? section.options?.map(
						(option: DropdownOption) => {
							return option.title.toLowerCase().includes(value.toLowerCase()) ?
								<ButtonElement
									icon={option.icon}
									text={option.title}
									onClick={() => props.changeSelectedOption(option)}
								/>
								: null;
						})
					: section.component
				}
			</div>
		);

	};

	return (
		<CustomScrollbar className={"DropdownView"} style={{position: "absolute"}}>
			<TextField className="filter-input" label="Filter" variant="outlined" onChange={onChange} />
			{dropdownSections.map(createSection)}
		</CustomScrollbar>
	);
};