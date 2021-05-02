import {Button, InputAdornment, OutlinedInput} from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import {inject, observer} from "mobx-react";
import React, {ChangeEvent, FC} from "react";
import styled from "styled-components";
import {SectionSeparator} from "../../common/SectionSeparator";
import {SeparatorVariant} from "../../consts/SeparatorVariant";
import {EntitiesStore} from "../../stores/EntitiesStore";
import {EntitiesFiltersSectionView} from "./FirstFiltersSection";

interface IProps {
	entitiesStore?: EntitiesStore;
}

const EntitiesSecondFiltersSectionView = styled(EntitiesFiltersSectionView)`

`;
export const SecondFiltersSectionClass: FC<IProps> = ({entitiesStore}) => {
	if (!entitiesStore) return null;

	const onChange = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;

		entitiesStore?.changeFilterInputValue(inputValue);
	};

	return (
		<EntitiesSecondFiltersSectionView>
			<OutlinedInput
				placeholder={"Search..."}
				type={"text"}
				value={entitiesStore.filterInputValue}
				onChange={onChange}
				endAdornment={
					<InputAdornment position="end">
						<SearchRoundedIcon />
					</InputAdornment>
				}
			/>

			<SectionSeparator variant={SeparatorVariant.VERTICAL} />

			<Button variant="outlined">
				<BlurOnRoundedIcon /> Followed <ArrowDropDownOutlinedIcon />
			</Button>
		</EntitiesSecondFiltersSectionView>
	);
};

export const SecondFiltersSection = inject("entitiesStore")(observer(SecondFiltersSectionClass));