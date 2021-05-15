import {Badge, Input, InputAdornment} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {Component, ReactElement} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import notifications from "../assets/icons/bell.svg";
import messages from "../assets/icons/comments.svg";
import homeIcon from "../assets/icons/house.svg";
import search from "../assets/icons/search.svg";
import logo from "../assets/images/logo.png";
import {defaultBoxShadow, white} from "../assets/variables";
import {NavDropdown} from "../components/navbar/NavDropdown";

const NavElement = styled.nav`
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	position: relative;
	z-index: 1000;

	background-color: ${white};
	box-shadow: ${defaultBoxShadow};

	.homeIcon {
		height: 20px;
	}

	.searchInput {
		width: 50%;
		max-width: 500px;
		margin: 0 30px;
	}
`;

const FirstNavSection = styled.div`
	width: 400px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

const EndNavSection = styled(FirstNavSection)`
	justify-content: end;

	button:nth-child(2),
	button:nth-child(3) {
		background-color: rgb(245, 245, 245);
		border-radius: 100%;
		width: 40px;
		height: 40px;
		min-width: unset;
		margin-left: 15px;
	}

	.MuiBadge-root {
		top: -10px;
		right: -5px;
	}
`;

export class NavBar extends Component {
	public render(): ReactElement {
		return (
			<NavElement>
				<FirstNavSection>
					<img src={logo} alt={"logo"} style={{height: 40}} />
					<NavDropdown />
				</FirstNavSection>

				<Input
					className={"searchInput"}
					placeholder={"Search something..."}
					endAdornment={
						<InputAdornment position="end">
							<img src={search} alt={"search icon"} />
						</InputAdornment>
					}
				/>

				<EndNavSection>
					<Link to="/">
						<Button
							onClick={() => {
								console.log("siemaneczko");
							}}
						>
							<img src={homeIcon} className={"homeIcon"} alt={"home icon"} />
						</Button>
					</Link>

					<Button
						style={{backgroundColor: "#f5f5f5", borderRadius: "100%"}}
						onClick={() => {
							console.log("siemaneczko");
						}}
					>
						<img src={messages} className={"homeIcon"} alt={"home icon"} />
						<Badge badgeContent={3} color="primary" />
					</Button>
					<Button
						style={{backgroundColor: "#f5f5f5", borderRadius: "100%"}}
						onClick={() => {
							console.log("siemaneczko");
						}}
					>
						<img src={notifications} className={"homeIcon"} alt={"home icon"} />
						<Badge badgeContent={4} color="primary" />
					</Button>
				</EndNavSection>
			</NavElement>
		);
	}
}
