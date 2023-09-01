import { writable } from "svelte/store";

const _initArr = []

for (let i = 1; i <= 151; i++) {
  _initArr.push(i)
}

/**
 * This should be the list of Pokemon IDs the user has caught.
 */
export const myPokemon = writable([]);

/**
 * This should be the list of Pokemon IDs the user has not caught yet.
 * Each time the user catches a Pokemon, move the ID from `wildPokemon` array
 * into the `myPokemon` array.
 */
export const wildPokemon = writable([..._initArr]);

/*
Bonus: Also store `myPokemon` and `wildPokemon` into Browser's Local Storage so that the user's progress is stored even after reloading the website.
If implementing the "Get Help" button in the `/src/routes/+page.svelte` component, the number of remaining hints should also be stored.
*/

/*
  Related documentation:

  https://svelte.dev/docs/svelte-store

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */