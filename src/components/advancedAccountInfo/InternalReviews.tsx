import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import {Proposal} from "../../interfaces/Proposal";
import {AdvancedAccountInfo} from "../../stores/AdvancedAccountInfo";
import {SingleAdvancedAccountInfoElement} from "./SingleAdvancedAccountInfoElement";

interface IProps {
	advancedAccountInfo?: AdvancedAccountInfo;
}

export const InternalReviewsElement: FC<IProps> = ({
	advancedAccountInfo
}) => {
	if (!advancedAccountInfo || !advancedAccountInfo.proposals) return null;

	const reviews = advancedAccountInfo.proposals.slice(0, 5);
	return (
		<SingleAdvancedAccountInfoElement>
			<strong>Internal reviews</strong>

			<TableContainer component={Paper}>
				<Table aria-label="caption table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Entity</TableCell>
							<TableCell>Location</TableCell>
							<TableCell>Expertise</TableCell>
							<TableCell>Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reviews.map((row: Proposal) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name.slice(0, 15)} {row.name.length > 15 ? "..." : ""}
								</TableCell>
								<TableCell>{row.entity}</TableCell>
								<TableCell>{row.city}</TableCell>
								<TableCell>{row.expertise}</TableCell>
								<TableCell>{row.date.toDateString()}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Link to={"/reviews"}>See more reviews</Link>
		</SingleAdvancedAccountInfoElement>
	);
};


export const InternalReviews = inject("advancedAccountInfo")(observer(InternalReviewsElement));