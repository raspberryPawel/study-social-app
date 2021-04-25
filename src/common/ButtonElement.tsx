import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import styled from "styled-components";

interface IProps {
	icon?: string,
	text: string,
	center?: boolean,
	className?: string;
	onClick?: () => void;
	additionalButtonIcon?: string;
	additionalButtonClick?: () => void
}

const Element = styled.button<IProps>`
	width: 100%;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	cursor: pointer;
	padding: 5px 0;
	background: inherit;
	outline: none;
	border: none;

	&:hover {
		text-decoration: none;
		background-color: rgba(0, 0, 0, 0.04) !important;
	}

	span {
		display: flex;
		align-items: center;
		justify-content: ${props => props.center ? "center" : "start"};
		padding: 5px 0;
		margin: 0;
		position: relative;

		img {
			height: 15px;
			padding: 0 10px;
		}
	}

	.additionalButton {
		width: 35px;
		height: 30px;
		min-width: unset;
		border: 0.5px solid rgba(135, 139, 145, 0.5);
		padding: 0;

		position: absolute;
		right: 10px;
	}
`;


export class ButtonElement extends Component<IProps> {
	static defaultProps = {
		additionalButtonClick: () => {},
	};

	protected onClick = () => {
		if (this.props.onClick) this.props.onClick();
	};

	public render() {
		const {icon, text, additionalButtonIcon, additionalButtonClick} = this.props;
		return (
			<Element {...this.props} onClick={this.onClick}>
				<span>
					{icon && <img src={icon} alt={"icon"} />}
					{text}
					{additionalButtonIcon
						? <Button className={"additionalButton"} onClick={additionalButtonClick}>
							<img src={additionalButtonIcon} className={"additionalIcon"} alt={"icon"} />
						</Button>
						: null}
				</span>

			</Element>
		);
	}
}