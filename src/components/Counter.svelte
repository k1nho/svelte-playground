<script>
	let count = 0;

	function increment() {
		count++;
	}

	// reactive declarations
	$: doubled = count * 2;
	$: if (count >= 10) {
		alert('we have a high count!');
		count = 0;
	}
</script>

<div>
	Counter : {count}
	Double of Counter: {doubled}
	<button on:click={increment}>Increment</button>
</div>
