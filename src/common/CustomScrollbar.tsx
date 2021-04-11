import React, {Component, CSSProperties, ReactElement} from "react";
import {Scrollbars} from "react-custom-scrollbars";

interface IProps {
	scrollHorizontallyOnWheel?: boolean;
	scrollHorizontallyMultiplier?: number;
	className?: string;
	style?: CSSProperties
}

interface IState {isFocused: boolean}

export class CustomScrollbar extends Component<IProps, IState> {
	state = {
		isFocused: false
	};

	protected scrollbar: Scrollbars | null = null;
	protected static defaultProps = {
		scrollHorizontallyOnWheel: false,
		scrollHorizontallyMultiplier: 3,
		className: "",
		style: {}
	};

	protected onBodyWheel = (e: WheelEvent) => {
		if (this.state.isFocused) {
			e.preventDefault();
		}
	};

	public componentDidMount() {
		document.body.addEventListener("wheel", this.onBodyWheel, {passive: false});
	}

	public componentWillUnmount() {
		document.body.removeEventListener("wheel", this.onBodyWheel);
	}

	protected onMouseOver = () => {
		if (this.props.scrollHorizontallyOnWheel) {
			this.setState({isFocused: true});
		}
	};
	protected onMouseLeave = () => {
		if (this.props.scrollHorizontallyOnWheel) {
			this.setState({isFocused: false});
		}
	};

	protected onWheel = (e: any) => {
		if (this.props.scrollHorizontallyOnWheel && this.scrollbar) {
			const scrollHorizontallyMultiplier = this.props.scrollHorizontallyMultiplier || 3;
			const scroll = this.scrollbar.getScrollLeft() + (e.deltaY * scrollHorizontallyMultiplier);

			this.scrollbar?.scrollLeft(scroll);
		}
	};

	public render(): ReactElement {
		return (
			<Scrollbars
				className={this.props.className}
				ref={(node) => this.scrollbar = node}
				onWheel={this.onWheel}
				style={this.props.style}
				onMouseOver={this.onMouseOver}
				onMouseLeave={this.onMouseLeave}
			>
				{this.props.children}
			</Scrollbars>
		);
	}
}