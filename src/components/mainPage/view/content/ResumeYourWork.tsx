import React, {FC} from "react";
import styled from "styled-components";
import contract from "../../../../assets/icons/document.svg";
import placeholder from "../../../../assets/images/placehoder.png";
import {SectionTitle} from "../../../../common/SectionTitle";
import {Work} from "../../interfaces/Work";
import {SingleWork} from "./SingleWork";

interface IProps {
}

const ResumeYourWorkMain = styled.div`
	margin-top: 20px;
	width: 80%;
	min-height: 400px;
	display: flex;
	flex-direction: column;
`;

const ResumeYourWorkContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;


const works: Work[] = [{
	title: "Contract #21",
	content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
	companyName: "Subsid. corp.",
	workspaceName: "Corporate",
	lastUpdateDate: new Date(),
	icon: contract,
	author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
}, {
	title: "Contract #22",
	content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
	companyName: "Subsid. corp.",
	workspaceName: "Client Contract",
	lastUpdateDate: new Date(),
	icon: contract,
	author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
}, {
	title: "Contract #23",
	content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
	companyName: "Subsid. corp.",
	workspaceName: "Client Contract",
	lastUpdateDate: new Date(),
	icon: contract,
	author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
},
	{
		title: "Contract #21",
		content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
		companyName: "Subsid. corp.",
		workspaceName: "Corporate",
		lastUpdateDate: new Date(),
		icon: contract,
		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
	}, {
		title: "Contract #22",
		content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
		companyName: "Subsid. corp.",
		workspaceName: "Client Contract",
		lastUpdateDate: new Date(),
		icon: contract,
		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
	}, {
		title: "Contract #23",
		content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
		companyName: "Subsid. corp.",
		workspaceName: "Client Contract",
		lastUpdateDate: new Date(),
		icon: contract,
		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
	},
];

export const ResumeYourWork: FC<IProps> = props => {
	return (
		<ResumeYourWorkMain>
			<SectionTitle title={"Resume your work"} />
			<ResumeYourWorkContainer>
				{works.map((work: any) => <SingleWork work={work} />)}
			</ResumeYourWorkContainer>
		</ResumeYourWorkMain>
	);
};
