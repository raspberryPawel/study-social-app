import {Button, MenuItem, Select} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import {inject, observer} from "mobx-react";
import React, {FC, useState} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {Condition} from "../../consts/Condition";
import {FilterByProperty} from "../../consts/FilterByProperty";
import {LogicalOperation} from "../../consts/LogicalOperation";
import {FilterDefinition} from "../../interfaces/FilterDefinition";
import {EntitiesStore} from "../../stores/EntitiesStore";
import {SingleFilterDefinition} from "./SingleFilterDefinition";

interface IProps {
	entitiesStore?: EntitiesStore
}

const AdvancedFiltersContainer = styled.div`
	width: 600px;
	min-height: 200px;
	padding: 20px;

	display: flex;
	flex-direction: column;

	background-color: white;
	box-shadow: ${defaultBoxShadow};

	strong {
		font-weight: inherit;
		font-size: 0.8em;
		color: ${grey["600"]}
	}

	.MuiFilledInput-input {
		padding: 5px;
		width: 60px;
		font-size: 0.8em;
	}

	.MuiSelect-select.MuiSelect-select, .MuiMenuItem-root {
		font-size: 0.8em;
	}

	.MuiMenu-paper {
		margin-top: 36px;
	}

	.MuiList-padding {
		padding: 0;
	}

	.MuiInput-root, .MuiFormControl-root {
		margin-right: 10px;
	}

	.MuiButton-root {
		min-width: unset;
		margin-right: 10px;
	}
`;


const AdvancedFilters: FC<IProps> = ({entitiesStore}) => {
	const [logicalOperator, changeOperator] = useState<LogicalOperation>(LogicalOperation.WHERE);

	if (!entitiesStore || !entitiesStore.filterDefinitions) return null;

	function getMenuItems<T>(values: Object, changeFn: (name: T) => void): React.ReactElement[] {
		return (
			Object.values(values).map((name) => {
				return (
					<MenuItem onClick={() => changeFn(name)} key={name} value={name}>
						{name}
					</MenuItem>
				);
			})
		);
	};

	return (
		<AdvancedFiltersContainer>
			<strong>Rows are filtered by the following conditions starting from the top</strong>
			{entitiesStore.filterDefinitions.map((filter: FilterDefinition) => {
				return (
					<SingleFilterDefinition key={filter.id} filterDefinition={filter} getMenuItems={getMenuItems} />
				);
			})}

			<div>
				<Select value={logicalOperator} defaultValue={LogicalOperation.WHERE}>
					{getMenuItems<LogicalOperation>(LogicalOperation, changeOperator)}
				</Select>

				<Button onClick={() => {
					entitiesStore?.addNewFilterDefinition({
						id: entitiesStore?.nextFilterId,
						logicalOperation: logicalOperator,
						filterByProperty: FilterByProperty.COMPANY,
						condition: {
							conditionName: Condition.CONTAINS,
							conditionValue: {
								[Condition.CONTAINS]: "",
							}
						}
					});
				}}
				>
					<AddRoundedIcon /> Add new filter
				</Button>
			</div>
		</AdvancedFiltersContainer>
	);
};

export const AdvancedFiltersView = inject("entitiesStore")(observer(AdvancedFilters));
