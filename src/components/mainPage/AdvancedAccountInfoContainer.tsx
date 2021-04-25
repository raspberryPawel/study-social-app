import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {SectionSeparator} from "../../common/SectionSeparator";
import {MainPageStore} from "../../stores/MainPageStore";
import {AccountSkillsElement} from "./view/advancedAccountInfo/AccountSkillsElement";
import {AdvancedAccountInfo} from "./view/advancedAccountInfo/AdvancedAccountInfo";

interface IProps {
	mainPageStore?: MainPageStore;
}

export const AdvancedAccountInfoElement: FC<IProps> = ({
	mainPageStore
}) => {
	if (!mainPageStore || !mainPageStore.currentLoggedUser) return null;

	return (
		<>
			<AdvancedAccountInfo user={mainPageStore.currentLoggedUser} />
			<SectionSeparator />
			<AccountSkillsElement />
			<SectionSeparator />
		</>
	);
};

export const AdvancedAccountInfoContainer = inject("mainPageStore")(observer(AdvancedAccountInfoElement));