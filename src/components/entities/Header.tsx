import {Button} from "@material-ui/core";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import React, {FC} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../common/SectionTitle";
import {ViewMode} from "../../consts/ViewMode";

interface IProps {
	viewMode: ViewMode;
	changeViewMode: (viewMode: ViewMode) => void;
}

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;

	section {
		display: flex;
		flex-direction: row;

		button {
			margin: 0 5px;

			svg {
				margin-right: 5px;
			}
		}
	}
`;

export const EntitiesHeader: FC<IProps> = ({viewMode, changeViewMode}) => {
	const {MOSAIC, LIST} = ViewMode;

	return (
		<HeaderContainer>
			<SectionTitle title={"Entities"} />
			<section>
				<Button
					variant="contained"
					onClick={() => changeViewMode(MOSAIC)}
					color={viewMode === MOSAIC ? "primary" : "default"}
				>
					<ViewModuleRoundedIcon />
					{viewMode === MOSAIC ? "Mosaic" : ""}
				</Button>
				<Button
					variant="contained"
					onClick={() => changeViewMode(LIST)}
					color={viewMode === LIST ? "primary" : "default"}
				>
					<ListRoundedIcon />
					{viewMode === MOSAIC ? "" : "List"}
				</Button>
			</section>
		</HeaderContainer>
	);
};
