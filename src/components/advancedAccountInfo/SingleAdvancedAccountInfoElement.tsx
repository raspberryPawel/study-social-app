import {blue} from "@material-ui/core/colors";
import styled from "styled-components";

export const SingleAdvancedAccountInfoElement = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 20px 0;

	strong {
		font-weight: 400;
		margin-bottom: 10px;
	}

	a {
		margin-top: 10px;
		text-align: right;
		color: ${blue["300"]} !important;
		font-weight: 300;
	}

	span {
		font-size: 0.9em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
	}
`;
