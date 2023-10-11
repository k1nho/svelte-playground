<script lang="ts">
	let name = 'svelte app';
	let src = './favicon.png';
</script>

<div>
	<img {src} alt="this is an icon" />
	<h1>hello {name.toUpperCase()}</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus ipsum quod neque
		sit odio doloribus iusto dignissimos at repellat nostrum accusamus perspiciatis et aliquam.
		Officiis harum alias odio ex?
	</p>
</div>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
