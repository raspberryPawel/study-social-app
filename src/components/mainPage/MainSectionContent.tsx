import React, {FC} from "react";
import {LatestPublications} from "./LatestPublications";
import {ResumeYourWork} from "./ResumeYourWork";
import {Workspaces} from "./Workspaces";

export const MainSectionContent: FC = () => (
	<>
		<LatestPublications />
		<Workspaces />
		<ResumeYourWork />
	</>
);
