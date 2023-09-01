<script>
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	/*
  There are no style requirements. Feel free to style this component any way you wish.
  */
</style>
