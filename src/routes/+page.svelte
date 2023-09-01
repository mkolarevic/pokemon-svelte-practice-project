<script>
	/*
	Fetch data for a random Pokemon among the `wildPokemon` array.
	Once the user enters the Pokemon name and submits it,
	 - If the user correctly guessed the Pokemon name, add that Pokemon's ID to the `myPokemon` array and remove it from `wildPokemon`.
	 - If the user incorrectly guessed the name, show a 2 second pop-up notifying the user
	No matter if the guess was correct or incorrect, immediately after the guess is made fetch the new random Pokemon.
	*/

	/*
	Related documentation:

	https://svelte.dev/docs/element-directives

	https://svelte.dev/docs/svelte-store

	https://learn.svelte.dev/tutorial/text-inputs

	https://learn.svelte.dev/tutorial/updating-arrays-and-objects

	https://learn.svelte.dev/tutorial/if-blocks

	https://learn.svelte.dev/tutorial/component-events

	https://pokeapi.co/docs/v2
	*/
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Hello world</h1>

	<!--
		This section should contain the Pokemon image. The image should have the `.masked` CSS class to hide the actual image of the Pokemon.

		Below the image, there should be an input where the user can enter text to guess the Pokemon name. The guess should be submitted
		by hitting Enter or by clicking a "Submit" button. (Note: We are not actually submitting an HTTP request, we're just triggering a function
		which will do the logic of checking if the guess is valid or not)
	-->

	<!--
		If the user has collected all the Pokemon, display a message congratulating the player
		instead of displaying the guesser section.
	-->

	<!--
		Bonus: Add a "Get help" button which can be clicked up to 3 times in total. When the button is clicked, display hints below the
		Input. The hint should display the first letter of the Pokemon's name and that Pokemon's types. For example, "This is a Fire Pokemon
		whose name starts with C."
	-->

	<!--
    For inspiration, check the `screens/home.png` file. It contains a simple skeleton layout of what this component should look like.
  -->
</section>

<style>
	/*
  There are no style requirements. Feel free to style this component any way you wish.
  */
</style>
