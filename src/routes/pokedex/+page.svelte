<script>
	/*
	This page should fetch the first 151 Pokemon, then parse the data so that it can be passed
	to the PokemonCard component.
	*/

	/*
  Related documentation:

  https://svelte.dev/tutorial/declaring-props

	https://svelte.dev/tutorial/each-blocks

	https://learn.svelte.dev/tutorial/nested-components

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

  https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores#creating_the_actual_component

  https://svelte.dev/docs/svelte-store
 */
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<section>
	<!--
		For each of the 151 Pokemon you get from the PokeAPI, render a PokemonCard component
		by passing the `id` and `name` props. You can use the SvelteJS `each` block.
	-->

	<!--
		Bonus: Implement pagination into this page. Allow the user to click on a page number, or
		simply use "previous" and "next" buttons to navigate. Each page should only contain 10
		Pokemon. Make sure to prevent users from navigating to non-existent pages (ex. page <1, page >16)
	-->

	<!--
    For inspiration, check the `screens/pokedex.png` file. It contains a simple skeleton layout of what this component should look like.
  -->
</section>

<style>
	/*
  There are no style requirements. Feel free to style this component any way you wish.
  */
</style>
