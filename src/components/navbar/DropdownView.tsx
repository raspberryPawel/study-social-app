import {TextField} from "@material-ui/core";

import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {white} from "../../assets/variables";
import CustomScrollbar from "../../common/CustomScrollbar";
import {SectionSeparator} from "../../common/SectionSeparator";
import {DropdownOption} from "../../interfaces/DropdownOption";
import {DropdownSections} from "../../interfaces/DropdownSections";
import {grey} from "@material-ui/core/colors";
import {ButtonWithLink} from "../../common/ButtonWithLink";

interface IProps {
	dropdownSections: DropdownSections[];
	changeSelectedOption: (selectedOption: DropdownOption) => void;
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
		width: 240px;
		z-index: 1000;
		-webkit-overflow-scrolling: touch;
	}

	.filterInput {
		width: calc(90% - 10px);
		margin: 10px 5%;

		.MuiOutlinedInput-input {
			padding: 5px 15px;
			font-size: 0.9em;
			font-weight: 400;
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
	color: ${grey["600"]};
	font-size: 13px;
	padding-left: 5px;
	margin: 5px 0;
`;

export const DropdownView: FC<IProps> = (props) => {
	const [value, changeValue] = useState<string>("");
	const {dropdownSections} = props;

	const onChange = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;

		changeValue(inputValue);
	};

	const createSection = (section: DropdownSections) => {
		return (
			<DropdownViewContainer key={section.title}>
				{!section.options && <SectionSeparator />}
				<SectionTitle>{section.title}</SectionTitle>

				{section.options
					? section.options?.map((option: DropdownOption) => {
							return option.title.toLowerCase().includes(value.toLowerCase()) ? (
								<ButtonWithLink
									key={option.title}
									link={option.link}
									icon={option.icon}
									text={option.title}
									onClick={() => props.changeSelectedOption(option)}
								/>
							) : null;
					  })
					: section.component}
			</DropdownViewContainer>
		);
	};
	return (
		<DropdownViewContainer>
			<CustomScrollbar className={"DropdownView"} style={{position: "absolute", width: 240}}>
				<TextField
					size={"small"}
					className="filterInput"
					placeholder="Filter"
					variant="outlined"
					onChange={onChange}
				/>
				{dropdownSections.map(createSection)}
			</CustomScrollbar>
		</DropdownViewContainer>
	);
};
