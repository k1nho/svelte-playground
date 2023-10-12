<script lang="ts">
	import { count } from '../stores/counterstore';

	function increment() {
		count.update((x) => x + 1);
	}

	function decrement() {
		count.update((x) => x - 1);
	}

	// reactive declarations
	$: doubled = $count * 2;
	$: if ($count >= 10) {
		alert('we have a high count! setting counter to 0');
		count.set(0);
	}
</script>

<div>
	Counter : {$count}
	Double of Counter: {doubled}
	<button on:click={increment}>Increment</button>
	<button on:click={decrement}>Decrement</button>
</div>
