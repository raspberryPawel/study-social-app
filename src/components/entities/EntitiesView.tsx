import {blue, grey} from "@material-ui/core/colors";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {ViewMode} from "../../consts/ViewMode";
import {Entity} from "../../interfaces/Entity";
import {EntitiesStore} from "../../stores/EntitiesStore";
import {PaginationView} from "../../common/PaginationView";

interface IProps {
	entitiesStore?: EntitiesStore;
	viewMode: ViewMode;
}

interface ISingleEntity {
	viewMode: ViewMode;
}

const EntitiesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

const SingleEntity = styled.div<ISingleEntity>`
	display: flex;
	flex-direction: row;

	width: ${(props) => (props.viewMode === ViewMode.MOSAIC ? "300px" : "100%")};
	margin: ${(props) => (props.viewMode === ViewMode.MOSAIC ? "10px 10px" : "2px 10px")};
	padding: 10px;
	border-radius: 10px;

	box-shadow: ${defaultBoxShadow};

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	img {
		width: ${(props) => (props.viewMode === ViewMode.MOSAIC ? " 90px" : "60px")};
		margin-right: 10px;
	}

	em {
		font-style: inherit;
		color: ${grey["800"]};
		font-weight: 300;
		font-size: 0.8em;
	}

	strong {
		font-style: inherit;
		color: ${blue["900"]};
		font-weight: 400;
	}
`;

export const EntitiesViewClass: FC<IProps> = ({entitiesStore, viewMode}) => {
	if (!entitiesStore || !entitiesStore.entities) return null;

	const getEntities = (): Entity[] => {
		if (entitiesStore) {
			const {entities, filteredEntities} = entitiesStore;
			const targetEntities = entitiesStore.filterInputValue ? [...filteredEntities] : [...entities];

			return targetEntities || [];
		}

		return [];
	};

	const renderListElement = (entity: Entity) => {
		const name = `${entity.name[0].toUpperCase()}${entity.name.slice(1, entity.name.length)}`;

		return (
			<SingleEntity viewMode={viewMode} key={entity.id}>
				<div>
					<img src={entity.photo.url} alt="entity" />
				</div>
				<div>
					<strong>{name}</strong>
					<em>
						{entity.address.suite}
						{", "}
						{entity.address.street}
						{", "}
						{entity.address.city}
						{", "}
					</em>
				</div>
			</SingleEntity>
		);
	};

	return (
		<EntitiesContainer>
			<PaginationView<Entity> list={getEntities()} renderListElement={renderListElement} countPerPage={20} />
		</EntitiesContainer>
	);
};

export const EntitiesView = inject("entitiesStore")(observer(EntitiesViewClass));
