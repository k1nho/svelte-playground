<script lang="ts">
	let questions = [
		{ id: 1, text: 'What is your favorite food?' },
		{ id: 2, text: 'What is your favorite color?' },
		{ id: 3, text: 'What is your favorite animal?' }
	];
	let answer = '';
	let selected: any;

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with answer ${answer}`);
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<select name="questions" id="questions" bind:value={selected} on:change={() => (answer = '')}>
			{#each questions as question (question.id)}
				<option value={question}>{question.text}</option>
			{/each}
		</select>

		<input type="text" bind:value={answer} />
		<button disabled={!answer} type="submit">Submit</button>
	</form>
	<p>
		selected question {selected ? selected.id : '[waiting...]'}
	</p>
</div>
