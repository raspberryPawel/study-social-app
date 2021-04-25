import {Avatar} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import message from "../assets/icons/comments.svg";
import profile from "../assets/icons/people.svg";
import {User} from "../interfaces/User";
import {ButtonElement} from "./ButtonElement";

interface IProps {
	user: User
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

	button {
		width: 150px;
	}
`;

export const InternalCorrespondent: FC<IProps> = ({user}) => (
	<InternalCorrespondentContainer>
		<section>
			<Avatar alt={user.name} src={user.imageUrl}
					style={{width: 25, height: 25}}
			/>
			<strong>{user.name}</strong>
		</section>
		<section>
			<Link to={"/message"}> <ButtonElement icon={message} text={"Message"} /> </Link>
			<Link to={"/profile"}> <ButtonElement icon={profile} text={"Profile"} /> </Link>
		</section>
	</InternalCorrespondentContainer>
);
