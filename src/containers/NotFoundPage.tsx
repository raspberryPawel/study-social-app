import React, {FC} from "react";

import styled from "styled-components";
import page404 from "../assets/icons/404.svg";
import {ButtonWithLink} from "../common/ButtonWithLink";

const NotFoundPageContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 40px;
	box-sizing: border-box;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 1em;

	section {
		width: 50%;
		align-self: center;

		svg {
			width: 100%;
			visibility: hidden;
		}
	}

	h1 {
		font-size: 7.5em;
		margin: 15px 0px;
		font-weight: 500;
	}

	h2 {
		font-weight: 500;
	}
`;

export const NotFoundPage: FC = () => (
	<NotFoundPageContainer>
		<section>
			<img src={page404} alt={"page not found"} />
		</section>
		<section>
			<h1>404</h1>
			<h2>UH OH! You're lost.</h2>
			<p>The page you are looking for does not exist.
				How you got here is a mystery. But you can click the button below
				to go back to the homepage.
			</p>
			<ButtonWithLink link={"/"} text={"Home"}/>
		</section>
	</NotFoundPageContainer>
);
