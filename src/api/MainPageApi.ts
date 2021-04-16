import axios from "axios";
import contract from "../assets/icons/document.svg";
import {Comment} from "../interfaces/Comment";
import {LatestPublication} from "../interfaces/LatestPublication";
import {Photo} from "../interfaces/Photo";
import {Post} from "../interfaces/Posts";
import {User} from "../interfaces/User";
import {Work} from "../interfaces/Work";

export class MainPageApi {
	public static getComments = async (): Promise<Comment[]> => {
		const comments = await axios.get("https://jsonplaceholder.typicode.com/comments");
		return comments.data;
	};

	public static getUsers = async (): Promise<User[]> => {
		const users = await axios.get("https://jsonplaceholder.typicode.com/users");
		return users.data;
	};

	public static getLoggedUser = async (): Promise<User> => {
		const user = await axios.get("https://jsonplaceholder.typicode.com/users?id=1");
		return user.data[0];
	};

	public static getPosts = async (userId: number): Promise<Post[]> => {
		const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
		return posts.data;
	};

	public static getPhotos = async (): Promise<Photo[]> => {
		const photos = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");
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
				workspaceName: "string",
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
}