import React, {FC} from "react";
import styled from "styled-components";

const Separator = styled.span`
	line-height: 2;
	padding: 0 10px;
`;

export const DotSeparator: FC = props => <Separator>•</Separator>;
