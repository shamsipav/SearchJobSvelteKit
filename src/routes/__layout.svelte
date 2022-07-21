<script lang="ts">
	import '../fonts.css';
	import '../icons.css';
	import '../global.css';
	import '../style.css';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer/>