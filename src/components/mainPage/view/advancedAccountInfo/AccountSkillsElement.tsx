import {blue} from "@material-ui/core/colors";
import React, {FC} from "react";
import styled from "styled-components";

interface SkillsSection {
	sectionName: string;
	elements: string[];
}

const sections: SkillsSection[] = [
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
	margin: 5px 0;

	span {
		font-size: 0.9em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
		color: ${blue["700"]};
		background-color: ${blue["50"]};
		padding: 2px 10px;
		border-radius: 5px;
	}
`;

export const AccountSkillsElement: FC = () => {
	return (
		<AccountSkillsContainer>
			{sections.map((section: SkillsSection) => (
				<AccountSkills>
					<span>{section.sectionName}</span>
					<SkillsContainer>
						{section.elements.map((skill: string) => (
							<span>{skill}</span>
						))}
					</SkillsContainer>
				</AccountSkills>
			))}
		</AccountSkillsContainer>
	);
};
