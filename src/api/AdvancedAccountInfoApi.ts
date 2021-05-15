import {Comment} from "../interfaces/Comment";
import {Fee} from "../interfaces/Fee";
import {Proposal} from "../interfaces/Proposal";
import {User} from "../interfaces/User";
import {MainPageApi} from "./MainPageApi";

export class AdvancedAccountInfoApi {
	public static getProposals = async (): Promise<Proposal[]> => {
		const comments: Comment[] = await MainPageApi.getComments();
		const users: User[] = await MainPageApi.getUsers();

		return comments.map((comment: Comment) => {
			const randomUserIndex = Math.floor(Math.random() * users.length);
			const user = users[randomUserIndex];
			return {
				id: comment.id,
				name: comment.name,
				entity: user.username,
				city: user.address.city,
				expertise: `#${comment.body.split(" ")[0]}`,
				date: new Date(),
				company: user.company.name,
			};
		});
	};

	public static getFees = async (): Promise<Fee[]> => {
		const users: User[] = await MainPageApi.getUsers();
		const max = 2021;
		const min = 2000;
		return users.slice(0, 10).map((user: User, index: number) => {
			return {
				id: index,
				year: Math.floor(Math.random() * (max - min) + min),
				costCenter: Math.floor(Math.random() * 1000 + 10),
				totalAmount: Math.floor(Math.random() * 100000 + 10000),
				lawFirm: user.company.name,
			};
		});
	};
}
