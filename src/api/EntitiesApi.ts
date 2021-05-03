import axios from "axios";
import {Entity} from "../interfaces/Entity";
import {Photo} from "../interfaces/Photo";
import {Todo} from "../interfaces/Todo";
import {User} from "../interfaces/User";
import {API_URL, MainPageApi} from "./MainPageApi";

export class EntitiesApi {
	public static getTodos = async (): Promise<Todo[]> => {
		const todos = await axios.get(`${API_URL}/todos`);
		return todos.data;
	};

	public static getEntities = async (): Promise<Entity[]> => {
		const todos: Todo[] = await EntitiesApi.getTodos();
		const photos: Photo[] = await MainPageApi.getPhotos();
		const users: User[] = await MainPageApi.getUsers();

		const entities: Entity[] = todos.map((todo: Todo) => {
			const randomUserIndex = Math.floor(Math.random() * users.length);
			const randomPhotoIndex = Math.floor(Math.random() * photos.length);

			return {
				id: todo.id,
				name: todo.title,
				company: users[randomUserIndex].company,
				address: users[randomUserIndex].address,
				photo: photos[randomPhotoIndex],
			};
		});

		return entities;
	};
}