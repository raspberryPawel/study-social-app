import React, {FC} from "react";
import styled from "styled-components";

interface IProps {
	title: string
}

const Title = styled.div`
	width: 100%;
	height: auto;
	text-align: left;
	font-size: 1.3em;
`;

export const SectionTitle: FC<IProps> = props => <Title>{props.title}</Title>;
