import {Avatar} from "@material-ui/core";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {blue} from "../../../../assets/variables";
import {User} from "../../../../interfaces/User";

interface IProps {
	user: User
}

const AdvancedAccountInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 20px;
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	a {
		color: ${blue};
		font-size: 12px;
		cursor: pointer;
		margin-top: 10px;
	}
`;

const AccountInfo = styled.div`
	display: flex;
	flex-direction: column;

	span {
		font-size: 0.85em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
	}
`;


const AdditionalInfo = styled(AccountInfo)`
	margin-left: 50px;
	align-items: flex-end;
	align-self: flex-end;
`;

export const AdvancedAccountInfo: FC<IProps> = ({user}) => {
	return (
		<AdvancedAccountInfoContainer>
			<AvatarContainer>
				<Avatar alt={user.name} src={user.imageUrl}
						style={{width: 50, height: 50}}
				/>
				<Link to={"/account"}>See profile</Link>
			</AvatarContainer>

			<AccountInfo>
				<span>{user.name}</span>
				<span>{user.company.name}</span>
				<span>{user.address.city}</span>
				<span>{user.company.role}</span>
			</AccountInfo>

			<AdditionalInfo>
				<span>{user.email}</span>
				<span>{user.phone}</span>
			</AdditionalInfo>

		</AdvancedAccountInfoContainer>
	);
};
