import React, {Component} from "react";
import styled from "styled-components";

interface IProps {
	icon: string,
	text: string,
	center?: boolean,
	className?: string;
	onClick?: () => void
}

const Element = styled.div<IProps>`
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	cursor: pointer;


	&:hover {
		text-decoration: none;
		background-color: rgba(0, 0, 0, 0.04);
	}

	span {
		display: flex;
		align-items: center;
		justify-content: ${props => props.center ? "center" : "start"};
		padding: 5px 0;
		margin: 0;

		img {
			height: 15px;
			padding: 0 10px;
		}
	}
`;


export class DropdownElement extends Component<IProps> {
	protected onClick = () => {
		if (this.props.onClick) this.props.onClick();
	};

	public render() {
		const {icon, text} = this.props;
		return (
			<Element {...this.props} onClick={this.onClick}>
				<span><img src={icon} alt={"icon"} />{text}</span>
			</Element>
		);
	}
}