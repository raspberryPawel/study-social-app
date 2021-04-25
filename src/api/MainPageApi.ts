import axios from "axios";
import contract from "../assets/icons/document.svg";
import examplePerson from "../assets/images/enxampleperson.png";
import {Comment} from "../interfaces/Comment";
import {Fee} from "../interfaces/Fee";
import {LatestPublication} from "../interfaces/LatestPublication";
import {Photo} from "../interfaces/Photo";
import {Post} from "../interfaces/Posts";
import {Proposal} from "../interfaces/Proposal";
import {User} from "../interfaces/User";
import {Work} from "../interfaces/Work";

const API_URL = "https://jsonplaceholder.cypress.io";
const OLD_API_URL = "https://jsonplaceholder.typicode.com";

export class MainPageApi {
	public static getComments = async (): Promise<Comment[]> => {
		const comments = await axios.get(`${API_URL}/comments`);
		return comments.data;
	};

	public static getUsers = async (): Promise<User[]> => {
		const users = await axios.get(`${API_URL}/users`);
		return users.data;
	};

	public static getLoggedUser = async (): Promise<User> => {
		const user = await axios.get(`${API_URL}/users?id=1`);
		const loggedUser = user.data[0];
		loggedUser.imageUrl = examplePerson;
		loggedUser.company.role = "Partner";

		return loggedUser;
	};

	public static getPosts = async (userId: number): Promise<Post[]> => {
		const posts = await axios.get(`${API_URL}/posts?userId=${userId}`);
		return posts.data;
	};

	public static getPhotos = async (): Promise<Photo[]> => {
		const photos = await axios.get(`${API_URL}/photos?albumId=1`);
		return photos.data;
	};

	public static getResumeYourWorks = async (): Promise<Work[]> => {
		const comments: Comment[] = await MainPageApi.getComments();
		const users: User[] = await MainPageApi.getUsers();
		const works: Work[] = comments.map((comment: Comment) => {
			const randomIndex = Math.floor(Math.random() * users.length);
			return {
				...comment,
				user: users[randomIndex],
				icon: contract,
				workspaceName: "Company",
				lastUpdateDate: new Date(),
			};
		});

		return works;
	};

	public static getLatestPublications = async (user: User): Promise<LatestPublication[]> => {
		const posts: Post[] = await MainPageApi.getPosts(user.id);
		const photos: Photo[] = await MainPageApi.getPhotos();

		const publications: LatestPublication[] = posts.map((post: Post) => {
			const randomPhotoIndex = Math.floor(Math.random() * photos.length);
			return {
				...post,
				lastUpdateDate: new Date(),
				user: user,
				photo: photos[randomPhotoIndex],
			};
		});

		return publications;
	};

	public static getProposals = async (): Promise<Proposal[]> => {
		const comments: Comment[] = await MainPageApi.getComments();
		const users: User[] = await MainPageApi.getUsers();

		const proposals: Proposal[] = comments.map((comment: Comment) => {
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

		return proposals;
	};

	public static getFees = async (): Promise<Fee[]> => {
		const users: User[] = await MainPageApi.getUsers();
		const max = 2021;
		const min = 2000;
		const fees: Fee[] = users.slice(0, 10).map((user: User, index: number) => {
			return {
				id: index,
				year: Math.floor(Math.random() * (max - min) + min),
				costCenter: Math.floor(Math.random() * 1000 + 10),
				totalAmount: Math.floor(Math.random() * 100000 + 10000),
				lawFirm: user.company.name,
			};
		});

		return fees;
	};
}