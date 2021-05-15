import React, {FC} from "react";
import styled from "styled-components";

interface IProps {
	title: string;
}

const Title = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	align-items: center;

	text-align: left;
	font-size: 1.3em;

	svg {
		margin-left: 5px;
	}
`;

export const SectionTitle: FC<IProps> = (props) => <Title>{props.title}</Title>;
