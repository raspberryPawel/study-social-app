import {Avatar} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import React, {FC} from "react";
import styled from "styled-components";
import message from "../assets/icons/comments.svg";
import profile from "../assets/icons/people.svg";
import {User} from "../interfaces/User";
import {ButtonWithLink} from "./ButtonWithLink";

interface IProps {
	user: User;
}

const InternalCorrespondentContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	margin: 5px 0;
	padding: 5px 10px;
	background-color: ${grey["100"]};
	box-sizing: border-box;

	font-size: 0.9em;
	font-weight: 300;

	section {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	strong {
		margin: 0 10px !important;
	}

	a {
		margin-top: 0;
	}

	button {
		width: 110px;
		display: flex;
		justify-content: space-around;

		span {
			margin-left: 0;
		}
	}
`;

export const InternalCorrespondent: FC<IProps> = ({user}) => (
	<InternalCorrespondentContainer>
		<section>
			<Avatar alt={user.name} src={user.photo.url} style={{width: 25, height: 25}} />
			<strong>{user.name}</strong>
		</section>
		<section>
			<ButtonWithLink link={"/message"} icon={message} text={"Message"} />
			<ButtonWithLink link={"/profile"} icon={profile} text={"Profile"} />
		</section>
	</InternalCorrespondentContainer>
);
