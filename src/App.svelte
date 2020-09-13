<script lang="ts">
	export let name: string;
	import TailwindCss from './TailwindCss.svelte'
</script>
<TailwindCss/>
<main>
	<h1>Hello {name}!</h1>
	<p>This is a test of the degit template tool from Rich Harris to see if I can put the stuff I use frequently into one project, as well as some notes:</p>
	<p> further notes: we're using postcss plugin of svelte-preprocess and setting postcss: plugins and just using tailwind from there.</p>
	<div class="bg-green-400">
		<p>npm run dev:</p>
		<or>
			<li>starting fresh, global.css on chrome network tab reads 1.1 kB size and 3ms time</li>
			<li>after adding a TailwindCss component to our root: </li>
		</or>
	</div>
	<div class="bg-teal-500">
		<p>npm run build && npm run start</p>
		<or>
			<li>starting fresh, global.css=1.1kB/4ms, bundle.css=439B/4ms</li>
			<li>after adding a TailwindCss component to our root: global.css=1.1kB/6ms, bundle.css=141kB/7ms, not certain on timing, jumps a bit.</li>
		</or>
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