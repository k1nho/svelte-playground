import { writable } from 'svelte/store';

export interface Person {
	id: number;
	name: string;
	age: number;
}

function usePersonStore() {
	const { subscribe, set, update } = writable<Person[]>([]);

	const addPerson = (person: Person) => {
		if (!person || person.name === '') return;
		update((persons) => {
			person.id = persons.length + 1;
			return [...persons, person];
		});
	};

	const removePerson = (id: number) => {
		update((persons) => {
			return persons.filter((p) => p.id !== id);
		});
	};

	const reset = () => {
		set([]);
	};

	return {
		subscribe,
		addPerson,
		removePerson,
		reset
	};
}

export const person = usePersonStore();
