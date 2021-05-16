import React, {FC, useState} from "react";
import {EntitiesFilters} from "../components/entities/EntitiesFilters";
import {EntitiesView} from "../components/entities/EntitiesView";
import {EntitiesHeader} from "../components/entities/Header";
import {ViewMode} from "../consts/ViewMode";
import styled from "styled-components";
import CustomScrollbar from "../common/CustomScrollbar";

interface IProps {}

const Wrapper = styled.div<{fullScreen: boolean}>`
	position: ${(props) => (props.fullScreen ? "fixed" : `static`)};
	top: 0;
	left: 0;
	z-index: ${(props) => (props.fullScreen ? 1000 : 1)};

	background-color: white;
	width: ${(props) => (props.fullScreen ? "100vw" : `100%`)};
	height: ${(props) => (props.fullScreen ? "100vh" : `100%`)};
	padding: 20px;

	display: flex;
	flex-direction: column;
	box-sizing: border-box;
`;

export const Entities: FC<IProps> = () => {
	const {MOSAIC} = ViewMode;
	const [viewMode, changeViewMode] = useState<ViewMode>(MOSAIC);
	const [fullScreen, changeFullScreen] = useState<boolean>(false);

	const toggleFullScreenMode = () => {
		changeFullScreen(!fullScreen);
	};

	const getContent = () => (
		<>
			<EntitiesHeader viewMode={viewMode} changeViewMode={changeViewMode} />
			<EntitiesFilters changeFullScreen={toggleFullScreenMode} fullScreenMode={fullScreen} />
			<EntitiesView viewMode={viewMode} />
		</>
	);

	return (
		<Wrapper fullScreen={fullScreen}>
			{fullScreen ? (
				<CustomScrollbar autoHeight={false} style={{height: "inherit"}}>
					{getContent()}
				</CustomScrollbar>
			) : (
				getContent()
			)}
		</Wrapper>
	);
};
