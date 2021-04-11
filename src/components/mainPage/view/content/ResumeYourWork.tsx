import React, {FC} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../../common/SectionTitle";

interface IProps {
}

const ResumeYourWorkMain = styled.div`
	margin-top: 20px;
	width: 80%;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 8px 11px -10px rgba(0, 0, 0, 0.75);
`;

export const ResumeYourWork: FC<IProps> = props => {
	return (
		<ResumeYourWorkMain>
			<SectionTitle title={"Resume your work"} />
		</ResumeYourWorkMain>
	);
};
