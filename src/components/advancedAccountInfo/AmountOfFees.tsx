import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {Fee} from "../../interfaces/Fee";
import {AdvancedAccountInfo} from "../../stores/AdvancedAccountInfo";
import {SingleAdvancedAccountInfoElement} from "./SingleAdvancedAccountInfoElement";

interface IProps {
	advancedAccountInfo?: AdvancedAccountInfo;
}

export const AmountOfFeesElement: FC<IProps> = ({advancedAccountInfo}) => {
	if (!advancedAccountInfo || !advancedAccountInfo.fees) return null;

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
						{advancedAccountInfo.fees.map((row: Fee) => (
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

export const AmountOfFees = inject("advancedAccountInfo")(observer(AmountOfFeesElement));
