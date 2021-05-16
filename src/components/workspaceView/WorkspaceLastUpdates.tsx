import {Button} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import {inject, observer} from "mobx-react";
import React, {FC, useState} from "react";
import styled from "styled-components";
import {
	EntitiesFiltersDefinitions,
	EntitiesFiltersName,
	SingleEntitiesFiltersDefinition,
} from "../../consts/EntitiesFiltersDefinitions";
import {Work} from "../../interfaces/Work";
import {MainPageStore} from "../../stores/MainPageStore";
import {PaginationView} from "../../common/PaginationView";
import {SingleWork} from "../mainPage/SingleWork";
import {SectionHeaderWithFilterInput} from "../../common/SectionHeaderWithFilterInput";

interface IProps {
	mainPageStore?: MainPageStore;
}

const ResumeYourWorkMain = styled.div`
	margin: 20px 0;
	width: 95%;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	padding-bottom: 100px;
	position: relative;
`;

const FiltersView = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	margin-top: 20px;

	button {
		padding: 5px;
		font-weight: 300;
		font-size: 0.85em;
		transition: 0.3s;

		svg {
			margin: 0 2.5px;
			fill: ${grey["700"]};
			transition: 0.3s;
		}
	}
`;

const FilterContainer = styled.div<{color: string; selected: boolean}>`
	margin: 5px;
	background-color: ${(props) => (props.selected ? props.color : null)};
`;

const LastUpdates: FC<IProps> = ({mainPageStore}) => {
	const [value, changeValue] = useState<string>("");

	if (!mainPageStore) return null;

	const getWorks = (): Work[] => {
		if (mainPageStore) {
			const {resumeYourWorks} = mainPageStore;

			return resumeYourWorks
				.filter((work: Work) => {
					if (mainPageStore?.workspacesFilters.includes(EntitiesFiltersName.ALL)) {
						return true;
					} else if (mainPageStore?.workspacesFilters.includes(work.workspaceDefinition.name)) return true;

					return false;
				})
				.filter((work: Work) => work.name.toLowerCase().includes(value.toLowerCase()));
		}

		return [];
	};

	const onInputChange = (value: string) => {
		changeValue(value);
	};

	const renderListElement = (work: Work) => <SingleWork key={work.id} work={work} showWorkspaceDefinitionDetails />;

	return (
		<ResumeYourWorkMain>
			<SectionHeaderWithFilterInput title={"Latest Updates"} onChange={onInputChange} />

			<FiltersView>
				{EntitiesFiltersDefinitions.map((filterDefinition: SingleEntitiesFiltersDefinition) => (
					<FilterContainer
						color={filterDefinition.color}
						selected={mainPageStore?.workspacesFilters.includes(filterDefinition.name)}
					>
						<Button onClick={() => mainPageStore?.addOrRemoveWorkspaceFilter(filterDefinition.name)}>
							{filterDefinition.icon && React.createElement(filterDefinition.icon)}
							{filterDefinition.name}
						</Button>
					</FilterContainer>
				))}
			</FiltersView>

			<PaginationView<Work> list={getWorks()} renderListElement={renderListElement} />
		</ResumeYourWorkMain>
	);
};

export const WorkspaceLastUpdates = inject("mainPageStore")(observer(LastUpdates));
