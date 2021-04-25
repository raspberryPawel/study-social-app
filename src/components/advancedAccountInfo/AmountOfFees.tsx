import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import styled from "styled-components";
import {Fee} from "../../interfaces/Fee";
import {MainPageStore} from "../../stores/MainPageStore";
import {SingleAdvancedAccountInfoElement} from "./SingleAdvancedAccountInfoElement";

interface IProps {
	mainPageStore?: MainPageStore;
}


const FeesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 20px 0;

	strong {
		font-weight: 400;
		margin: 20px 0;
	}
`;


export const AmountOfFeesElement: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.fees) return null;

	return (
		<SingleAdvancedAccountInfoElement>
			<strong>Amount of fees</strong>

			<TableContainer component={Paper}>
				<Table aria-label="caption table">
					<TableHead>
						<TableRow>
							<TableCell>Year</TableCell>
							<TableCell>Cost center</TableCell>
							<TableCell>Total amount</TableCell>
							<TableCell>Law firm</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{mainPageStore.fees.map((row: Fee) => (
							<TableRow key={row.id}>
								<TableCell>{row.year}</TableCell>
								<TableCell>CS {row.costCenter}</TableCell>
								<TableCell>{row.totalAmount} $</TableCell>
								<TableCell>{row.lawFirm}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</SingleAdvancedAccountInfoElement>
	);
};

export const AmountOfFees = inject("mainPageStore")(observer(AmountOfFeesElement));