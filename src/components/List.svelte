<script lang="ts">
	// passing props
	export let list: Person[] = [{ name: 'svelte', age: 10 }];

	interface Person {
		name: string;
		age: number;
	}

	let persons: Person[] = list;

	function remove(personName: string) {
		persons = persons.filter((person) => person.name !== personName);
	}
</script>

<div>
	{#each persons as person, index (index)}
		<div>
			<p>
				{`${index}. ${person.name} ${person.age}`}
			</p>
			<button on:click={() => remove(person.name)}> remove </button>
		</div>
	{/each}
	{#if persons.length >= 5}
		<p>We have 5 users!</p>
	{:else}
		<p>We have less than 5 users</p>
	{/if}
</div>
