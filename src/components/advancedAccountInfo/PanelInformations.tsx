import {grey} from "@material-ui/core/colors";
import React, {FC} from "react";
import styled from "styled-components";
import {Attachment} from "../../common/Attachment";
import {SingleAdvancedAccountInfoElement} from "./SingleAdvancedAccountInfoElement";

interface IProps {}

const PanelInformation = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 5px 0;

	strong {
		font-weight: 300;
		color: ${grey["600"]};
		margin-bottom: 5px;
		font-size: 0.9em;
	}

	span {
		font-size: 0.9em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
	}
`;

export const PanelInformations: FC<IProps> = () => {
	return (
		<SingleAdvancedAccountInfoElement>
			<strong>Panel Information</strong>
			<PanelInformation>
				<strong>Hourly free</strong>
				<span>610$/hour (Negotiated)</span>
			</PanelInformation>

			<PanelInformation>
				<strong>Terms & conditions</strong>
				<span>Monthly 10K$ retainer - see with Jenny Smith</span>
				<Attachment name={"Attachment_lorem-ipsum25232422.jpg"} />
			</PanelInformation>
		</SingleAdvancedAccountInfoElement>
	);
};
