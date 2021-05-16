import {Button} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ImportExportRoundedIcon from "@material-ui/icons/ImportExportRounded";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import React, {FC} from "react";
import styled from "styled-components";
import {DropdownContainer} from "../../common/DropdownContainer";
import {SectionSeparator} from "../../common/SectionSeparator";
import {SeparatorVariant} from "../../consts/SeparatorVariant";
import {AdvancedFiltersView} from "./AdvancedFiltersView";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import UnfoldLessRoundedIcon from "@material-ui/icons/UnfoldLessRounded";

interface IProps {
	changeFullScreen: () => void;
	fullScreenMode: boolean;
}

export const EntitiesFiltersSectionView = styled.div`
	display: flex;

	button {
		padding: 5px;
		font-weight: 300;
		font-size: 0.75em;
		transition: 0.3s;

		svg {
			margin: 0 2.5px;
			fill: ${grey["700"]};
			transition: 0.3s;
		}

		&:hover {
			svg {
				transition: 0.3s;
				fill: black;
			}
		}
	}

	.expandButton {
		svg {
			transform: rotate(-45deg);
		}
	}
`;

export const FirstFiltersSection: FC<IProps> = ({changeFullScreen, fullScreenMode}) => {
	const getButtonView = () => {
		return (
			<Button>
				<FilterListRoundedIcon /> Filters
			</Button>
		);
	};

	return (
		<EntitiesFiltersSectionView>
			<Button variant="contained">
				<FiberManualRecordOutlinedIcon /> All <ArrowDropDownOutlinedIcon />
			</Button>

			<Button>
				<MoreHorizOutlinedIcon />
			</Button>

			<SectionSeparator variant={SeparatorVariant.VERTICAL} />

			<Button>
				<ImportExportRoundedIcon /> Sort
			</Button>

			<DropdownContainer buttonView={getButtonView()}>
				<AdvancedFiltersView />
			</DropdownContainer>

			<SectionSeparator variant={SeparatorVariant.VERTICAL} />

			<Button className={"expandButton"} onClick={changeFullScreen}>
				{fullScreenMode ? <UnfoldLessRoundedIcon /> : <UnfoldMoreRoundedIcon />}
			</Button>

			<SectionSeparator variant={SeparatorVariant.VERTICAL} />

			<Button>
				<ShareRoundedIcon /> Share
			</Button>
		</EntitiesFiltersSectionView>
	);
};
