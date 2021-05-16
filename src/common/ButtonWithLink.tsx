import Button from "@material-ui/core/Button";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

interface IProps {
	link: string;
	icon?: string;
	text: string;
	onClick?: () => void;
	endAdornment?: JSX.Element;
}

const Container = styled.div`
	button {
		width: 100%;
		font-size: 0.8em;
		font-weight: 400;

		text-transform: inherit;

		display: flex;
		justify-content: space-between !important;
		align-items: center !important;

		img {
			height: 15px;
			padding: 0 10px;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ButtonWithLink: FC<IProps> = ({link, icon, text, onClick, endAdornment}) => (
	<Container>
		<Link to={link}>
			<Button onClick={() => onClick?.()}>
				<Wrapper>
					{icon && <img src={icon} alt="icon edit" />}
					<span>{text}</span>
				</Wrapper>

				{endAdornment}
			</Button>
		</Link>
	</Container>
);
