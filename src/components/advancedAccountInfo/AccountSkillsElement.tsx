import {TextField} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import React, {FC, useState} from "react";
import styled from "styled-components";
import {EditableText} from "../../common/EditableText";
import {AdvancedAccountInfoMode} from "../../consts/Mode";
import {AdvancedAccountInfoEditableSection} from "./AdvancedAccountInfoEditableSection";

interface SkillsSection {
	sectionName: string;
	elements: string[];
}

const defaultSections: SkillsSection[] = [
	{
		sectionName: "Expertise",
		elements: ["Mergers and acquisition"]
	},
	{
		sectionName: "Specialties",
		elements: ["Cross border operation", "Transaction over 500M$"]
	},
	{
		sectionName: "Admission to practice law",
		elements: ["Paris bar association", "Tunisian bar association"]
	},
	{
		sectionName: "Countries",
		elements: ["Tunisia"]
	},
];

const AccountSkillsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 20px 0;
`;

const AccountSkills = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 5px 0;

	span {
		font-size: 0.9em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
	}
`;

const SkillsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	div {
		margin-top: 10px;
	}

	span {
		font-size: 0.9em;
		font-weight: 300;
		color: ${blue["700"]};
		background-color: ${blue["50"]};
		padding: 2px 10px;
		margin-left: 0px;
		border-radius: 5px;
	}

	input {
		font-size: 0.8em;
		height: 0.7em;
		margin-top: 1px;
		font-weight: 300;
	}

	.MuiFormControl-root {
		margin: 2px 0 10px 10px;
	}
`;

export const AccountSkillsElement: FC = () => {
	const {EDIT} = AdvancedAccountInfoMode;
	const [mode, changeMode] = useState<AdvancedAccountInfoMode>(AdvancedAccountInfoMode.READ);
	const [sections, changeSections] = useState<SkillsSection[]>(defaultSections);

	const addNewElement = (event: React.FocusEvent<HTMLInputElement>, sectionName: string) => {
		const input = event.target as HTMLInputElement;
		const inputValue = input.value;
		if (inputValue.length) {
			const allSections = [...sections];
			const currentSection = allSections.find(section => section.sectionName === sectionName);

			currentSection?.elements.push(inputValue);
			input.value = "";
			changeSections(allSections);
		}
	};

	const onSkillEdit = (value: string, sectionName: string, index: number) => {
		const allSections = [...sections];
		const currentSection = allSections.find(section => section.sectionName === sectionName);

		if (currentSection) currentSection.elements[index] = value;
		changeSections(allSections);
	};

	return (
		<AdvancedAccountInfoEditableSection changeMode={changeMode}>
			<AccountSkillsContainer>
				{sections.map((section: SkillsSection) => (
					<AccountSkills>
						<span>{section.sectionName}</span>
						<SkillsContainer>
							{section.elements.map((skill: string, index: number) => (
								<EditableText editOnClick={true} isEditable={mode === EDIT} text={skill}
											  onChange={(value: string) => onSkillEdit(value, section.sectionName,
												  index)}
								/>
							))}
							{mode === EDIT
								? <TextField
									placeholder={"New element"}
									onBlur={(e: React.FocusEvent<HTMLInputElement>) => addNewElement(e,
										section.sectionName)}
								/>
								: null
							}
						</SkillsContainer>
					</AccountSkills>
				))}
			</AccountSkillsContainer>
		</AdvancedAccountInfoEditableSection>
	);
};
