import {Button, MenuItem, Select, TextField} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {inject, observer} from "mobx-react";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import {Condition} from "../../consts/Condition";
import {FilterByProperty} from "../../consts/FilterByProperty";
import {LogicalOperation} from "../../consts/LogicalOperation";
import {FilterDefinition} from "../../interfaces/FilterDefinition";
import {EntitiesStore} from "../../stores/EntitiesStore";

interface IProps {
	entitiesStore?: EntitiesStore;
	filterDefinition: FilterDefinition;
	getMenuItems: <T>(values: Object, changeFn: (name: T) => void) => ReactElement[];
}

const SingleFilterContainer = styled.div`
	display: flex;
	align-items: end;
`;

export const SingleFilterDefinitionView: FC<IProps> = ({entitiesStore, filterDefinition, getMenuItems}) => {
	if (!entitiesStore) return null;

	const changeText = (e: React.ChangeEvent<HTMLInputElement>, conditionName?: string) => {
		const name = conditionName || filterDefinition.condition.conditionName;

		entitiesStore?.changeFilterDefinitionInputValue(filterDefinition.id, name, e.target.value);
	};

	return (
		<SingleFilterContainer>
			<Button onClick={() => entitiesStore?.removeFilterDefinition(filterDefinition.id)}>
				<CloseRoundedIcon />
			</Button>
			<Select value={filterDefinition.logicalOperation} defaultValue={LogicalOperation.WHERE}>
				{getMenuItems<LogicalOperation>(LogicalOperation, (name: LogicalOperation) =>
					entitiesStore?.changeLogicalOperation(filterDefinition.id, name)
				)}
			</Select>

			<Select value={filterDefinition.filterByProperty} defaultValue={FilterByProperty.COMPANY}>
				{getMenuItems<FilterByProperty>(FilterByProperty, (name: FilterByProperty) =>
					entitiesStore?.changeFilterByProperty(filterDefinition.id, name)
				)}
			</Select>

			<Select value={filterDefinition.condition.conditionName} defaultValue={Condition.CONTAINS}>
				{getMenuItems<Condition>(Condition, (name: Condition) =>
					entitiesStore?.changeCondition(filterDefinition.id, name)
				)}
			</Select>
			<TextField
				placeholder={"text"}
				variant="filled"
				onChange={changeText}
				value={filterDefinition.condition.conditionValue[filterDefinition.condition.conditionName]}
			/>

			{filterDefinition.condition.conditionName === Condition.ENDS_BEFORE ? (
				<>
					<Select value={"And"}>
						<MenuItem key={"And"} value={"And"}>
							{"And"}
						</MenuItem>
					</Select>
					<TextField
						placeholder={"text"}
						variant="filled"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeText(e, "In")}
					/>
				</>
			) : null}
		</SingleFilterContainer>
	);
};

export const SingleFilterDefinition = inject("entitiesStore")(observer(SingleFilterDefinitionView));
