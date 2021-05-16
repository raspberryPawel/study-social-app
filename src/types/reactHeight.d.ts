interface Props {
	onHeightReady?: (height: number) => void;
	hidden?: boolean;
	dirty?: boolean;
	getElementHeight?: () => number;
}

declare module "react-height" {
	import {PureComponent} from "react";

	export class ReactHeight extends PureComponent<Props> {
		onHeightReady = (height: number) => height;
	}
}
