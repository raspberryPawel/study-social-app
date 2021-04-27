import React, {FC} from "react";
import styled from "styled-components";
import message from "../../assets/icons/comments.svg";
import document from "../../assets/icons/ecosystem.svg";
import iconEdit from "../../assets/icons/settings.svg";
import {ButtonWithLink} from "../../common/ButtonWithLink";

interface IProps {
}


const TopButtonsContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-bottom: 20px;
	padding: 0 10px;
	box-sizing: border-box;

	button {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 18px;
		}

		span {
			font-size: 0.9em;
			margin-left: 10px;
			border-radius: 5px;
		}
	}
`;

export const TopButtons: FC<IProps> = props => (
	<TopButtonsContainer>
		<ButtonWithLink link={"/404"} icon={message} text={"Message"}/>
		<ButtonWithLink link={"/404"} icon={document} text={"Create a request"}/>
		<ButtonWithLink link={"/404"} icon={iconEdit} text={"Add to cluster"}/>
	</TopButtonsContainer>
);
