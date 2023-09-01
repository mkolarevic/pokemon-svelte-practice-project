<script>
	/*
   When this site loads, it should fetch data for the pokemon based on the URL parameter `id`.
   Use Fetch API to get data from the PokeAPI `https://pokeapi.co/api/v2/pokemon/:id`, then parse
   the data in a way which will allow you to display necessary details.

   Bonus: If the user has not "caught" this specific Pokemon, display "?" instead of actual stats,
   mask the image and ensure no details are shown on this page. The idea is that only caught pokemon should show their details.
  */

	/*
  Related documentation:

  https://svelte.dev/docs/svelte#onmount

  https://developer.mozilla.org/en-US/docs/Web/API/fetch

  https://youtube.com/watch?v=drK6mdA9d_M

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  */
</script>

<svelte:head>
	<title>Pokemon Details</title>
</svelte:head>

<article>
	<!--
    This page is used to display Pokemon Data for an individual Pokemon
  -->

	<!--
    Should contain a header with the Pokemon ID and Pokemon Name
  -->

	<!--
    Should display the Pokemon Type. Keep in mind that some Pokemon have 2 types, they
    should both be displayed.
  -->

	<!--
    Should display the image of the Pokemon. You can use the following Sprite URL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/ID.png`, where ID is the Pokemon ID
  -->

	<!--
    Should display the Pokemon stats. Display the stat (should be uppercase) followed by the `base_stat` value. Stats are located in the `stats` array in the PokeAPI response.
  -->

	<!--
    Bonus: Should display Pokemon moves and which level the move is learned at. Only take into
    account moves with the `version_group.name` === 'red-blue'.
  -->

	<!--
    For inspiration, check the `screens/pokemon-id.png` file. It contains a simple skeleton layout of what this component should look like.
  -->
</article>

<style>
	/*
  There are no style requirements. Feel free to style this component any way you wish.
  */
</style>
