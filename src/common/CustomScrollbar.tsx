import React, {Component, CSSProperties, ReactElement} from "react";
import {Scrollbars} from "react-custom-scrollbars";
// @ts-ignore @todo add types
import {ReactHeight} from "react-height";

interface IProps {
	scrollHorizontallyOnWheel?: boolean;
	scrollHorizontallyMultiplier?: number;
	className?: string;
	style?: CSSProperties,
	autoHeight?: boolean,
	maxHeight?: number,
}

interface IState {
	isFocused: boolean,
	childrenHeight: number
}

export class CustomScrollbar extends Component<IProps, IState> {
	state = {
		isFocused: false,
		childrenHeight: 0,
	};

	protected scrollbar: Scrollbars | null = null;
	protected static defaultProps = {
		scrollHorizontallyOnWheel: false,
		scrollHorizontallyMultiplier: 5,
		className: "",
		autoHeight: true,
		maxHeight: 400,
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
		const styles = {
			height: `${this.state.childrenHeight}px`,
			maxHeight: `${this.props.maxHeight}px`,
			...this.props.style
		};

		return (
			<Scrollbars
				className={this.props.className}
				ref={(node) => this.scrollbar = node}
				onWheel={this.onWheel}
				style={styles}
				onMouseOver={this.onMouseOver}
				onMouseLeave={this.onMouseLeave}
			>
				<ReactHeight onHeightReady={(height: number) => this.setState({childrenHeight: height})}>
					{this.props.children}
				</ReactHeight>
			</Scrollbars>
		);
	}
}