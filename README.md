# Svelte Project

## About

This is an example Svelte application.

## Running the project

To run the project, you must first install dependencies by running `npm i`. Then, you can run the development version with `npm run dev -- --open`.

To build a production version of the project, run `npm run build`. You can preview this build with `npm run preview`.

## API

### Get single Pokemon

- By ID: `https://pokeapi.co/api/v2/pokemon/1`
- By name: `https://pokeapi.co/api/v2/pokemon/bulbasaur`

### Get list

- All 151: `https://pokeapi.co/api/v2/pokemon?limit=151`
- Paginated: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`

## Documentation

[Svelte Documentation](https://svelte.dev/docs/introduction)

[SvelteKit Documentation](https://kit.svelte.dev/docs/introduction)

[Svelte Examples](https://svelte.dev/examples/hello-world)

[PokeAPI](https://pokeapi.co/docs/v2)

## Task specifications

Tasks will be available as comments in related components

- `src/routes/+page.svelte`
- `src/routes/pokedex/+page.svelte`
- `src/routes/pokemon/[id]/+page.svelte`
- `src/lib/store/store.js`
- `src/lib/components/PokemonCard.svelte`
- `src/lib/components/Header.svelte`

The overall objective of this mini-project is to create a user application for guessing Pokemon names, collecting Pokemon and displaying their details.

The home screen should include a section where the user is prompted to guess the name of a random Pokemon fetched from the PokeAPI. This section should display the image of the Pokemon being guessed. This image should be masked, so that only the silhuette of the Pokemon is shown. If the user correctly guesses the name, that Pokemon should be stored into the user's Pokedex. After making the guess (no matter if the guess is correct or not), the application should fetch another Pokemon. This process should repeat until the user has correctly guessed the names of all of the 151 original Pokemon.

There should be a `/pokedex` page which contains the list of all of the 151 original Pokemon. This page should only display the names and images (non-masked images) of Pokemon which the user has "collected". These "collected" Pokemon should also be clickable links, leading to the details of the specific Pokemon.

There should be a `/pokemon/:id` page which contains the details of the individual Pokemon. This page should fetch the details based on the `id` parameter. The details should not be shown unless the user has "collected" the Pokemon.

Finally, the Header of the application should indicate how many Pokemon the user has caught.

## Goals

The goal of this project is to teach the basics of front-end development. This includes the basics of HTML and CSS, the basics of JavaScript, working with objects and arrays in JavaScript, working with fetch API to get data from a server, working with a component-driven front-end library (Svelte).
