import React, {FC} from "react";
import styled from "styled-components";
import {SeparatorVariant} from "../consts/SeparatorVariant";

interface IProps {
	variant?: SeparatorVariant;
}

const border = "0.5px solid rgba(0, 0, 0, 0.2)";
const Separator = styled.div<IProps>`
	border-right: ${(props) => (props.variant === SeparatorVariant.VERTICAL ? border : "none")};
	border-bottom: ${(props) => (props.variant === SeparatorVariant.VERTICAL ? "none" : border)};
	width: ${(props) => (props.variant === SeparatorVariant.VERTICAL ? "1px" : "100%")};
	height: ${(props) => (props.variant === SeparatorVariant.VERTICAL ? "100%" : "1px")};
	margin: ${(props) => (props.variant === SeparatorVariant.VERTICAL ? "0 5px" : "5px 0")};
	opacity: 0.5;
`;

export const SectionSeparator: FC<IProps> = ({variant}) => <Separator variant={variant} />;
