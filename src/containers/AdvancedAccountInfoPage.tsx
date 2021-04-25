import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {SectionSeparator} from "../common/SectionSeparator";
import {AccountSkillsElement} from "../components/advancedAccountInfo/AccountSkillsElement";
import {AdvancedAccountInfo} from "../components/advancedAccountInfo/AdvancedAccountInfo";
import {AmountOfFees} from "../components/advancedAccountInfo/AmountOfFees";
import {InternalReviews} from "../components/advancedAccountInfo/InternalReviews";
import {PanelInformations} from "../components/advancedAccountInfo/PanelInformations";
import {Proposals} from "../components/advancedAccountInfo/Proposals";
import {ServicesAndProjects} from "../components/advancedAccountInfo/ServicesAndProjects";
import {MainPageStore} from "../stores/MainPageStore";

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

			<PanelInformations />
			<ServicesAndProjects />
			<SectionSeparator />

			<Proposals />
			<SectionSeparator />

			<InternalReviews />
			<SectionSeparator />

			<AmountOfFees />
		</>
	);
};

export const AdvancedAccountInfoPage = inject("mainPageStore")(observer(AdvancedAccountInfoElement));