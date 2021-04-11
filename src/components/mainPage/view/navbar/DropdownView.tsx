import React, {Component, ReactElement} from "react";
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

export class DropdownView extends Component<IProps> {
	protected createSection = (section: DropdownSections) => {
		return (
			<div>
				{!section.options && <SectionSeparator />}
				<p className={"sectionTitle"}>{section.title}</p>

				{section.options
					? section.options?.map(
						(option: DropdownOption) => <ButtonElement
							icon={option.icon}
							text={option.title}
							onClick={() => this.props.changeSelectedOption(option)}
						/>)
					: section.component
				}
			</div>
		);

	};

	public render(): ReactElement {
		const {dropdownSections} = this.props;

		return (
			<CustomScrollbar className={"DropdownView"} style={{height: 400, position: "absolute"}}>
				{dropdownSections.map(this.createSection)}
			</CustomScrollbar>
		);
	}
}