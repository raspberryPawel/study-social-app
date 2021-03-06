import React, {Component, CSSProperties, ReactElement} from "react";
import {Scrollbars} from "react-custom-scrollbars";
import {ReactHeight} from "react-height";

interface IProps {
	scrollHorizontallyOnWheel?: boolean;
	scrollHorizontallyMultiplier?: number;
	className?: string;
	style?: CSSProperties;
	autoHeight?: boolean;
	maxHeight?: number | string;
	onHeightReady?: (height: number) => void;
}

interface IState {
	isFocused: boolean;
	childrenHeight: number;
}

class CustomScrollbar extends Component<IProps, IState> {
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
		maxHeight: null,
		onHeightReady: (height: number) => height,
		style: {},
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
			const scroll = this.scrollbar.getScrollLeft() + e.deltaY * scrollHorizontallyMultiplier;

			this.scrollbar?.scrollLeft(scroll);
		}
	};

	protected onHeightReady = (height: number) => {
		if (this.props.onHeightReady) this.props.onHeightReady(height);
		this.setState({childrenHeight: height});
	};

	public render(): ReactElement {
		const styles = {
			height: `${this.state.childrenHeight}px`,
			maxHeight: `${this.props.maxHeight}${typeof this.props.maxHeight === "string" ? "" : "px"}`,
			...this.props.style,
		};

		return (
			<Scrollbars
				className={this.props.className}
				ref={(node) => (this.scrollbar = node)}
				onWheel={this.onWheel}
				style={styles}
				onMouseOver={this.onMouseOver}
				onMouseLeave={this.onMouseLeave}
			>
				<ReactHeight onHeightReady={this.onHeightReady}>{this.props.children}</ReactHeight>
			</Scrollbars>
		);
	}
}

export default CustomScrollbar;
