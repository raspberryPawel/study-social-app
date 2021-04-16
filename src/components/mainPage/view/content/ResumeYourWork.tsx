import {TextField} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import {inject, observer} from "mobx-react";
import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../../common/SectionTitle";
import {Work} from "../../../../interfaces/Work";
import {MainPageStore} from "../../../../stores/MainPageStore";
import {SingleWork} from "./SingleWork";

interface IProps {
	mainPageStore?: MainPageStore;
}

const ResumeYourWorkMain = styled.div`
	margin-top: 20px;
	width: 80%;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	position: relative;
`;

const ResumeYourWorkContainer = styled.div`
	margin-top: 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Filters = styled.div`
	position: absolute;
	top: -15px;
	right: 0;

	.filter-input {
		width: 100%;
		margin: 10px 0;

		.MuiOutlinedInput-input {
			padding: 10px 14px;
		}

		.MuiInputLabel-outlined {
			transform: translate(14px, 15px) scale(1);
		}

		.MuiInputLabel-outlined.Mui-focused {
			transform: translate(14px, -6px) scale(0.75);
		}
	}
`;

const ResumeYourWorkClass: FC<IProps> = ({
	mainPageStore
}) => {
	const [value, changeValue] = useState<string>("");
	const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
		mainPageStore?.changePage(page);
	};

	const onInputChange = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;
		changeValue(inputValue);
		mainPageStore?.filterWorks(inputValue);
	};

	const getWorks = (): Work[] => {
		if (mainPageStore) {
			const {resumeYourWorks, filteredWorks} = mainPageStore;
			const works = value ? filteredWorks : resumeYourWorks;

			return works.slice(mainPageStore.currentFirstIndex,
				mainPageStore.currentFirstIndex + mainPageStore.countPerPage);
		}

		return [];
	};

	return (
		<ResumeYourWorkMain>
			<SectionTitle title={"Resume your work"} />
			<Filters>
				<TextField className="filter-input" label="Filter" variant="outlined" onChange={onInputChange} />
			</Filters>
			<ResumeYourWorkContainer>
				{getWorks().map((work: Work) =>
					<SingleWork key={work.id} work={work} />
				)}
			</ResumeYourWorkContainer>
			<Pagination count={mainPageStore?.pagesCount}
						onChange={handleChange}
			/>
		</ResumeYourWorkMain>
	);
};

export const ResumeYourWork = inject("mainPageStore")(observer(ResumeYourWorkClass));
