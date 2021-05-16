import {Input, InputAdornment} from "@material-ui/core";
import React, {FC} from "react";

import styled from "styled-components";
import homeIcon from "../assets/icons/house.svg";
import logo from "../assets/images/logo.png";
import {defaultBoxShadow} from "../assets/variables";
import {NavDropdown} from "../components/navbar/NavDropdown";
import {ButtonWithLink} from "../common/ButtonWithLink";
import {ButtonWithBadge} from "../common/ButtonWithBadge";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import {inject, observer} from "mobx-react";
import {MainPageStore} from "../stores/MainPageStore";
import {defaultSection} from "../consts/DropdownSections";

interface IProps {
	mainPageStore?: MainPageStore;
}

const NavElement = styled.nav`
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	position: relative;
	z-index: 1000;

	background-color: white;
	box-shadow: ${defaultBoxShadow};

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

	button {
		justify-content: center !important;
	}

	.MuiBadge-root {
		top: -10px;
		right: -5px;
	}
`;

const NavBarView: FC<IProps> = ({mainPageStore}) => (
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
					<SearchRoundedIcon />
				</InputAdornment>
			}
		/>

		<EndNavSection>
			<ButtonWithLink
				link={"/"}
				text={""}
				icon={homeIcon}
				onClick={() => {
					mainPageStore?.changeCurrentDropdownSection(defaultSection);
				}}
			/>

			<ButtonWithBadge badgeContent={3} icon={SmsIcon} rounded />
			<ButtonWithBadge badgeContent={5} icon={NotificationsActiveIcon} rounded />
		</EndNavSection>
	</NavElement>
);

export const NavBar = inject("mainPageStore")(observer(NavBarView));
