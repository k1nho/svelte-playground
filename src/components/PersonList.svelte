<script lang="ts">
	import { person, type Person } from '../stores/fullstore';

	let localPerson: Person = { id: -1, name: '', age: 0 };
</script>

<div>
	{#if $person}
		{#each $person as p, index (p.id)}
			<div>
				<p>{index}.{p.name} {p.age}</p>
				<button on:click={() => person.removePerson}>remove</button>
			</div>
		{/each}
	{:else}
		No people have been added ...
	{/if}
	<input type="text" bind:value={localPerson.name} />
	<input type="number" bind:value={localPerson.age} min="0" max="200" />
	<button on:click={() => person.addPerson({ ...localPerson })}>create</button>
</div>
