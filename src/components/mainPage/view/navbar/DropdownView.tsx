import React, {Component} from "react";
import {DropdownElement} from "../../../../common/DropdownElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import {DropdownOption} from "../../interfaces/DropdownOption";
import {DropdownSections} from "../../interfaces/DropdownSections";
import styles from "./DropdownView.module.scss";

interface IProps {
	dropdownSections: DropdownSections[]
}

interface IState {}

export class DropdownView extends Component<IProps, IState> {

	protected createSection = (section: DropdownSections) => {
		return (
			<div>
				{!section.options && <SectionSeparator />}
				<p className={styles.sectionTitle}>{section.title}</p>

				{section.options
					? section.options?.map(
						(option: DropdownOption) => <DropdownElement icon={option.icon} text={option.title} />)
					: section.component
				}
			</div>
		);

	};

	public render() {
		const {dropdownSections} = this.props;

		return (
			<div className={styles.DropdownView}>
				{dropdownSections.map(this.createSection)}
			</div>
		);
	}
}