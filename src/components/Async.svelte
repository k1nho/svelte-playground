<script lang="ts">
	interface DogApiResponse {
		message: string;
		status: string;
	}

	async function getDog() {
		return fetch('https://dog.ceo/api/breeds/image/random');
	}
</script>

<div>
	{#await getDog()}
		<p>fetching dog...</p>
	{:then dog}
		{#await dog.json() then data}
			<div>
				<p>here is the dog</p>
				<img src={data.message} alt="a dog" />
			</div>
		{:catch err}
			<p>Error cannot convert json {err.message}</p>
		{/await}
	{:catch error}
		<p>could not fetch dog {error.message}</p>
	{/await}
</div>
