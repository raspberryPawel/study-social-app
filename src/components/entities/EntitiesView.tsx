import {blue, grey} from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {ViewMode} from "../../consts/ViewMode";
import {Entity} from "../../interfaces/Entity";
import {EntitiesStore} from "../../stores/EntitiesStore";

interface IProps {
	entitiesStore?: EntitiesStore,
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
`;

const SingleEntity = styled.div<ISingleEntity>`
	display: flex;
	flex-direction: row;

	width: ${props => props.viewMode === ViewMode.MOSAIC ? "300px" : "100%"};
	margin: ${props => props.viewMode === ViewMode.MOSAIC ? "10px 10px" : "2px 10px"};
	padding: 10px;
	border-radius: 10px;

	box-shadow: ${defaultBoxShadow};

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	img {
		width: ${props => props.viewMode === ViewMode.MOSAIC ? " 90px" : "60px"};
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

	const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
		entitiesStore?.changePage(page);
	};

	const getEntities = (): Entity[] => {
		if (entitiesStore) {
			const {entities, filteredEntities} = entitiesStore;
			const targetEntities = entitiesStore.filterInputValue ? filteredEntities : entities;

			return (targetEntities || []).slice(entitiesStore.currentFirstIndex,
				entitiesStore.currentFirstIndex + entitiesStore.countPerPage);
		}

		return [];
	};

	return (
		<>
			<EntitiesContainer>
				{getEntities().map((entity: Entity) => {
					const name = `${entity.name[0].toUpperCase()}${entity.name.slice(1, entity.name.length)}`;

					return (
						<SingleEntity viewMode={viewMode}>
							<div>
								<img src={entity.photo.url} alt="entity image" />
							</div>
							<div>
								<strong>{name}</strong>
								<em>
									{entity.address.suite}{", "}
									{entity.address.street}{", "}
									{entity.address.city}{", "}
								</em>
							</div>
						</SingleEntity>
					);
				})}
			</EntitiesContainer>
			<Pagination count={entitiesStore?.pagesCount}
						onChange={handleChange}
			/>
		</>
	);
};

export const EntitiesView = inject("entitiesStore")(observer(EntitiesViewClass));