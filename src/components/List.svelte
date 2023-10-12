<script lang="ts">
	// passing props
	export let list: Person[] = [{ name: 'svelte', age: 10 }];

	interface Person {
		name: string;
		age: number;
	}

	let persons: Person[] = list;
	let personName = '';
	let personAge = 0;
	let isChecked = false;

	function addPerson() {
		persons = [...persons, { name: personName, age: 21 }];
		personName = '';
	}

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
	<!-- Using two way data binding -->
	<input type="text" bind:value={personName} />
	<input type="number" bind:value={personAge} min="0" max="200" />
	<button on:click={() => addPerson}>create</button>
	<!-- Binding check -->
	<input type="checkbox" bind:checked={isChecked} />
	{#if isChecked}
		<p>The checkbox is checked</p>
	{:else}
		<p>The checkbox is not checked</p>
	{/if}
</div>
