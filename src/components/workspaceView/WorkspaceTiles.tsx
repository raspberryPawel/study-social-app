import {SvgIconTypeMap} from "@material-ui/core";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DomainIcon from "@material-ui/icons/Domain";
import React, {FC} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";

interface IProps {}

interface Tile {
	id: number;
	name: string;
	description: string;
	icon: OverridableComponent<SvgIconTypeMap>;
}

const tiles: Tile[] = [
	{
		id: 1,
		name: "Explore your entities",
		description:
			"laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
		icon: DomainIcon,
	},
	{
		id: 2,
		name: "Structure the ownership",
		description:
			"laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
		icon: AccountTreeIcon,
	},
	{
		id: 3,
		name: "Define the calendar",
		description:
			"laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
		icon: DateRangeIcon,
	},
];

const TilesContainer = styled.div`
	display: flex;
	margin: 40px 0;
	padding: 20px 10px;
	justify-content: space-between;

	box-shadow: ${defaultBoxShadow};
`;

const SingleTile = styled.div`
	width: 300px;
	height: 200px;
	padding: 10px;

	background-color: white;
	border-radius: 10px;
	box-sizing: border-box;

	position: relative;
	z-index: 2;
`;

const TileBg = styled.div`
	width: 300px;
	height: 200px;

	position: absolute;
	z-index: 0;

	opacity: 0.1;

	display: flex;
	justify-content: flex-end;

	svg {
		font-size: 200px;
	}
`;

export const WorkspaceTiles: FC<IProps> = () => {
	return (
		<TilesContainer>
			{tiles.map((tile) => (
				<SingleTile key={tile.id}>
					<TileBg>{React.createElement(tile.icon, {fontSize: "large", color: "primary"})}</TileBg>

					<section>{React.createElement(tile.icon, {fontSize: "large", color: "primary"})}</section>

					<section>
						<strong>{tile.name}</strong>
						<p>{tile.description}</p>
					</section>
				</SingleTile>
			))}
		</TilesContainer>
	);
};
