import React, {FC} from "react";
import {LatestPublications} from "./LatestPublications";
import {ResumeYourWork} from "./ResumeYourWork";
import {Workspaces} from "./Workspaces";

export const RightSectionContent: FC = () => (
	<>
		<LatestPublications />
		<Workspaces />
		<ResumeYourWork />
	</>
);
