import React, {FC, useState} from "react";
import {EntitiesFilters} from "../components/entities/EntitiesFilters";
import {EntitiesView} from "../components/entities/EntitiesView";
import {EntitiesHeader} from "../components/entities/Header";
import {ViewMode} from "../consts/ViewMode";

interface IProps {
}

export const Entities: FC<IProps> = props => {
	const {MOSAIC} = ViewMode;
	const [viewMode, changeViewMode] = useState<ViewMode>(MOSAIC);

	return (
		<>
			<EntitiesHeader viewMode={viewMode} changeViewMode={changeViewMode} />
			<EntitiesFilters />
			<EntitiesView viewMode={viewMode} />
		</>
	);
};
