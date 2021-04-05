import React, {Component, ReactElement} from "react";
import {DropdownElement} from "../../../../common/DropdownElement";
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
						(option: DropdownOption) => <DropdownElement
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
			<div className={"DropdownView"}>
				{dropdownSections.map(this.createSection)}
			</div>
		);
	}
}