import axios, { AxiosResponse } from 'axios';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

type Callback = () => void;

export class User {
	events: { [key: string]: Callback[] } = {};
	private USERS_URL = 'http://localhost:3000/users/';

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: Callback) {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach(callback => {
			callback();
		});
	}

	fetch(): void {
		axios
			.get(`${this.USERS_URL}/${this.get('id')}`)
			.then((response: AxiosResponse) => {
				this.set(response.data);
			});
	}

	save(): void {
		const id = this.get('id');
		if (id) {
			axios.put(`${this.USERS_URL}/${id}`, this.data);
		} else {
			axios.post(`${this.USERS_URL}`, this.data);
		}
	}
}
