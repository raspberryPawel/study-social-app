import React from "react";
import styled from "styled-components";

const Separator = styled.div`
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
	width: 100%;
	opacity: 0.5;
	margin: 5px 0;
`;

export const SectionSeparator = () => (
	<Separator />
);
