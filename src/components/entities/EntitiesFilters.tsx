import React, {FC} from "react";
import styled from "styled-components";
import {FirstFiltersSection} from "./FirstFiltersSection";
import {SecondFiltersSection} from "./SecondFiltersSection";

interface IProps {
	changeFullScreen: () => void;
	fullScreenMode: boolean;
}

const EntitiesFiltersView = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	margin: 10px 0;

	.MuiOutlinedInput-input {
		padding: 6px 14px;
	}
`;

export const EntitiesFilters: FC<IProps> = ({changeFullScreen, fullScreenMode}) => {
	return (
		<EntitiesFiltersView>
			<FirstFiltersSection changeFullScreen={changeFullScreen} fullScreenMode={fullScreenMode} />
			<SecondFiltersSection />
		</EntitiesFiltersView>
	);
};
