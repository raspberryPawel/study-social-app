import {Avatar} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import React, {FC, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {EditableText} from "../../common/EditableText";
import {AccessType} from "../../consts/AccessType";
import {User} from "../../interfaces/User";
import {AdvancedAccountInfoEditableSection} from "./AdvancedAccountInfoEditableSection";

interface IProps {
	user: User
}

const AdvancedAccountInfoContainer = styled.div`
	width: 100%;

	position: relative;
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
	box-sizing: border-box;
	padding: 0 10px;

	button {
		position: absolute;
		top: 0;
		right: 10px
	}
`;

const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	a {
		color: ${blue["300"]} !important;
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
	const {EDIT} = AccessType;
	const [mode, changeMode] = useState<AccessType>(AccessType.READ);

	return (
		<AdvancedAccountInfoEditableSection changeMode={changeMode}>
			<AdvancedAccountInfoContainer>
				<AvatarContainer>
					<Avatar alt={user.name} src={user.imageUrl}
							style={{width: 50, height: 50}}
					/>
					<Link to={"/account"}>See profile</Link>
				</AvatarContainer>

				<AccountInfo>
					<EditableText isEditable={mode === EDIT} text={user.name}
								  onChange={(value => user.name = value)}
					/>
					<EditableText isEditable={mode === EDIT} text={user.company.name}
								  onChange={(value => user.company.name = value)}
					/>
					<EditableText isEditable={mode === EDIT} text={user.address.city}
								  onChange={(value => user.address.city = value)}
					/>
					<EditableText isEditable={mode === EDIT} text={user.company.role}
								  onChange={(value => user.company.role = value)}
					/>
				</AccountInfo>

				<AdditionalInfo>
					<EditableText isEditable={mode === EDIT} text={user.email}
								  onChange={(value => user.email = value)}
					/>
					<EditableText isEditable={mode === EDIT} text={user.phone}
								  onChange={(value => user.phone = value)}
					/>
				</AdditionalInfo>

			</AdvancedAccountInfoContainer>
		</AdvancedAccountInfoEditableSection>
	);
};
