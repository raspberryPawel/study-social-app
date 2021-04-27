import Button from "@material-ui/core/Button";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

interface IProps {
	link: string;
	icon?: string;
	text: string;
}

const Container = styled.div`
	button {
		text-transform: inherit;
		font-weight: 400;
	}
`;

export const ButtonWithLink: FC<IProps> = ({link, icon, text}) => (
	<Container>
		<Link to={link}>
			<Button>
				{icon && <img src={icon} alt="icon edit" />}
				<span>{text}</span>
			</Button>
		</Link>
	</Container>
);
