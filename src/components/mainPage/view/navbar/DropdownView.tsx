import {TextField} from "@material-ui/core";

import React, {ChangeEvent, FC, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {white} from "../../../../assets/variables";

import {ButtonElement} from "../../../../common/ButtonElement";
import {CustomScrollbar} from "../../../../common/CustomScrollbar";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import {DropdownOption} from "../../../../interfaces/DropdownOption";
import {DropdownSections} from "../../../../interfaces/DropdownSections";

interface IProps {
	dropdownSections: DropdownSections[];
	changeSelectedOption: (selectedOption: DropdownOption) => void
}

const DropdownViewContainer = styled.div`
	.DropdownView {
		background-color: ${white};
		border: 1px solid #ccc;
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
		box-sizing: border-box;
		margin-top: -1px;
		height: auto;
		max-height: 400px;
		overflow-y: auto;
		position: absolute;
		top: 100%;
		width: 100%;
		z-index: 1000;
		-webkit-overflow-scrolling: touch;
	}

	.filterInput {
		width: calc(90% - 10px);
		margin: 10px 5%;

		.MuiOutlinedInput-input {
			padding: 10px 14px;
		}

		.MuiInputLabel-outlined {
			transform: translate(14px, 15px) scale(1);
		}

		.MuiInputLabel-outlined.Mui-focused {
			transform: translate(14px, -6px) scale(0.75);
		}
	}
`;

const SectionTitle = styled.p`
	color: $light-grey;
	font-size: 13px;
	padding-left: 5px;
	margin: 5px 0;
`;

export const DropdownView: FC<IProps> = props => {
	const [value, changeValue] = useState<string>("");
	const {dropdownSections} = props;

	const onChange = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;

		changeValue(inputValue);
	};

	const createSection = (section: DropdownSections) => {
			return (
				<DropdownViewContainer>
					{!section.options && <SectionSeparator />}
					<SectionTitle>{section.title}</SectionTitle>

					{section.options
						? section.options?.map(
							(option: DropdownOption) => {
								return option.title.toLowerCase().includes(value.toLowerCase()) ?
									<Link to={option.link}>
										<ButtonElement
											icon={option.icon}
											text={option.title}
											onClick={() => props.changeSelectedOption(option)}
										/>
									</Link>
									: null;
							})
						: section.component
					}
				</DropdownViewContainer>
			);
		}
	;

	return (
		<DropdownViewContainer>
			<CustomScrollbar className={"DropdownView"} style={{position: "absolute"}}>
				<TextField className="filterInput" label="Filter" variant="outlined" onChange={onChange} />
				{dropdownSections.map(createSection)}
			</CustomScrollbar>
		</DropdownViewContainer>
	);
};