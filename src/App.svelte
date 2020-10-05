<script lang="ts">
	export let name: string;
	import TailwindCss from './TailwindCss.svelte'
</script>
<TailwindCss/>
<main>
	<h1 class="bg-green-500">Hello {name}!</h1>
	<p>This is a test of the degit template tool from Rich Harris to see if I can put the stuff I use frequently into one project</p>
	<div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
		this is the postcssexample div, tailwindcss background, red, then green, then blue, then pink, then teal
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>