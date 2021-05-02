import {Button} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ImportExportRoundedIcon from "@material-ui/icons/ImportExportRounded";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import SettingsEthernetRoundedIcon from "@material-ui/icons/SettingsEthernetRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import React, {FC} from "react";
import styled from "styled-components";
import {SectionSeparator} from "../../common/SectionSeparator";
import {SeparatorVariant} from "../../consts/SeparatorVariant";

interface IProps {
}


export const EntitiesFiltersSectionView = styled.div`
	display: flex;

	button {
		padding: 5px;
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

export const FirstFiltersSection: FC<IProps> = ({}) => {
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
			<Button>
				<FilterListRoundedIcon /> Filters
			</Button>

			<SectionSeparator variant={SeparatorVariant.VERTICAL} />

			<Button className={"expandButton"}>
				<SettingsEthernetRoundedIcon />
			</Button>

			<SectionSeparator variant={SeparatorVariant.VERTICAL} />

			<Button>
				<ShareRoundedIcon /> Share
			</Button>
		</EntitiesFiltersSectionView>
	);
};
