import React, {FC} from "react";
import {SectionTitle} from "./SectionTitle";
import {TextField} from "@material-ui/core";
import {FollowedButton} from "./FollowedButton";
import styled from "styled-components";

interface IProps {
	title: string;
	onChange: (value: string) => void;
}

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

export const SectionHeaderWithFilterInput: FC<IProps> = ({title, onChange}) => {
	return (
		<>
			<SectionTitle title={title} />
			<Filters>
				<TextField
					className="filter-input"
					placeholder="Filter"
					variant="outlined"
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
				<FollowedButton />
			</Filters>
		</>
	);
};
