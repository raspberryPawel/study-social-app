import {inject, observer} from "mobx-react";
import React, {FC, useState} from "react";
import styled from "styled-components";
import {Work} from "../../interfaces/Work";
import {MainPageStore} from "../../stores/MainPageStore";
import {SingleWork} from "./SingleWork";
import {PaginationView} from "../../common/PaginationView";
import {SectionHeaderWithFilterInput} from "../../common/SectionHeaderWithFilterInput";

interface IProps {
	mainPageStore?: MainPageStore;
}

const ResumeYourWorkMain = styled.div`
	margin-top: 20px;
	width: 95%;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	padding-bottom: 100px;
	position: relative;
`;

const ResumeYourWorkContainer = styled.div`
	margin-top: 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Filters = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: absolute;
	top: -15px;
	right: 0;

	.filter-input {
		width: 100%;
		margin: 10px 10px;

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

const ResumeYourWorkClass: FC<IProps> = ({mainPageStore}) => {
	const [value, changeValue] = useState<string>("");

	const onInputChange = (value: string) => {
		changeValue(value);
		mainPageStore?.filterWorks(value);
	};

	const getWorks = (): Work[] => {
		if (mainPageStore) {
			const {resumeYourWorks, filteredWorks} = mainPageStore;

			return value ? filteredWorks : resumeYourWorks;
		}

		return [];
	};

	const renderListElement = (work: Work) => <SingleWork key={work.id} work={work} showCompanyDetails />;

	return (
		<ResumeYourWorkMain>
			<SectionHeaderWithFilterInput title={"Latest Updates"} onChange={onInputChange} />

			<ResumeYourWorkContainer>
				<PaginationView<Work> list={getWorks()} renderListElement={renderListElement} />
			</ResumeYourWorkContainer>
		</ResumeYourWorkMain>
	);
};

export const ResumeYourWork = inject("mainPageStore")(observer(ResumeYourWorkClass));
