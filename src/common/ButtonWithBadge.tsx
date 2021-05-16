import React, {FC} from "react";
import {Badge, SvgIconTypeMap} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import styled from "styled-components";

interface IProps {
	badgeContent: string | number;
	buttonBackground?: string;
	rounded?: boolean;
	badgeColor?: "primary" | "secondary" | "default" | "error";
	iconColor?: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled";
	icon?: OverridableComponent<SvgIconTypeMap>;
	onClick?: () => void;
}

const Wrapper = styled.div<{rounded: boolean}>`
	button {
		width: ${(props) => (props.rounded ? "40px" : "unset")};
		height: ${(props) => (props.rounded ? "40px" : "unset")};
		min-width: unset;
		margin-left: 15px;
	}
`;

export const ButtonWithBadge: FC<IProps> = ({
	badgeContent,
	badgeColor,
	iconColor,
	icon,
	buttonBackground,
	rounded,
	onClick,
}) => {
	const backgroundColor = buttonBackground || "#f5f5f5";
	const borderRadius = rounded ? "100%" : 0;

	return (
		<Wrapper rounded={rounded || false}>
			<Button style={{backgroundColor: backgroundColor, borderRadius: borderRadius}} onClick={() => onClick?.()}>
				{icon && React.createElement(icon, {color: iconColor || "disabled"})}
				{badgeContent && <Badge badgeContent={badgeContent} color={badgeColor || "primary"} />}
			</Button>
		</Wrapper>
	);
};
