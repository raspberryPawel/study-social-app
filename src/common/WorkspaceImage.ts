import styled from "styled-components";

export const WorkspaceImage = styled.img<{height: string}>`
	width: 100%;
	height: ${(props) => props.height};

	object-fit: cover;
	z-index: 0;
`;
