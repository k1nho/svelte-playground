<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function sayHello() {
		dispatch('message', {
			text: 'Hello from Event Dispatcher'
		});
	}
</script>

<div>
	<button on:click={() => sayHello}>dispatch message event</button>
</div>
