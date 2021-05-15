import axios from "axios";
import document from "../assets/icons/document.svg";
import contract from "../assets/icons/document.svg";
import examplePerson from "../assets/images/enxampleperson.png";
import {EntitiesFiltersDefinitions} from "../consts/EntitiesFiltersDefinitions";
import {Comment} from "../interfaces/Comment";
import {LatestPublication} from "../interfaces/LatestPublication";
import {Photo} from "../interfaces/Photo";
import {Post} from "../interfaces/Posts";
import {User} from "../interfaces/User";
import {Work} from "../interfaces/Work";
import {Workspace} from "../interfaces/Workspace";

export const API_URL = "https://jsonplaceholder.cypress.io";

// const OLD_API_URL = "https://jsonplaceholder.typicode.com";

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
			const randomWorkspaceDefinitionIndex = Math.floor(Math.random() * EntitiesFiltersDefinitions.length);
			return {
				...comment,
				workspaceDefinition: EntitiesFiltersDefinitions[randomWorkspaceDefinitionIndex],
				user: users[randomIndex],
				icon: contract,
				workspaceName: "Company",
				lastUpdateDate: new Date(),
			};
		});

		return works;
	};


	public static getWorkspaces = async (): Promise<Workspace[]> => {
		const comments: Comment[] = await MainPageApi.getComments();
		const users: User[] = await MainPageApi.getUsers();
		const photos: Photo[] = await MainPageApi.getPhotos();


		const works: Workspace[] = comments.map((comment: Comment) => {
			const randomPhotoIndex = Math.floor(Math.random() * photos.length);
			const randomIndex = Math.floor(Math.random() * users.length);
			return {
				id: `${comment.id}`,
				title: comment.name.slice(0, 20),
				description: comment.body,
				photo: photos[randomPhotoIndex],
				usersCount: randomIndex,
				workspaceName: users[randomIndex].company.name,
				lastUpdateDate: new Date(),
				icon: document
			};
		});

		return works.slice(0, 10);
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
}