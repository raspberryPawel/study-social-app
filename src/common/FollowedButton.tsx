import React, {FC} from "react";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import {Button} from "@material-ui/core";
import styled from "styled-components";
import {blue} from "@material-ui/core/colors";

const Wrapper = styled.div`
	button {
		font-weight: 400;
		color: ${blue["700"]};
		border-color: ${blue["700"]};

		svg {
			fill: ${blue["700"]};
		}
	}
`;

export const FollowedButton: FC = () => (
	<Wrapper>
		<Button variant="outlined">
			<BlurOnRoundedIcon /> Followed <ArrowDropDownOutlinedIcon />
		</Button>
	</Wrapper>
);
