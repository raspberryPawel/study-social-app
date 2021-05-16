import {DropdownSections} from "../interfaces/DropdownSections";
import home from "../assets/icons/house.svg";
import publications from "../assets/icons/publications.svg";
import peoples from "../assets/icons/people.svg";
import entities from "../assets/icons/entities.svg";
import administration from "../assets/icons/administration.svg";
import document from "../assets/icons/document.svg";
import corporate from "../assets/icons/entities2.svg";
import groupNorms from "../assets/icons/open-book.svg";
import {AccountInfo} from "../components/navbar/AccountInfo";
import React from "react";

export const defaultSection = {title: "Home", icon: home, link: "/"};
export const publicationSection = {title: "Publications", icon: publications, link: "/publications"};

export const dropdownSections: DropdownSections[] = [
	{
		title: "Platform",
		options: [
			defaultSection,
			publicationSection,
			{title: "Peoples", icon: peoples, link: "/peoples"},
			{title: "Entities", icon: entities, link: "/entities"},
			{title: "Administration", icon: administration, link: "/administration"},
		],
	},
	{
		title: "Workspaces",
		options: [
			{title: "Client contract", icon: document, link: "/client-contract"},
			{title: "Supplier contract", icon: document, link: "/supplier-contract"},
			{title: "Corporate", icon: corporate, link: "/corporate"},
			{title: "Group Norms", icon: groupNorms, link: "/group-norms"},
			{title: "Real estate contracts", icon: document, link: "/real-estate-contracts"},
		],
	},
	{
		title: "Account",
		component: <AccountInfo />,
	},
];
