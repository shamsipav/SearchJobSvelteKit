<script context="module" lang="ts">
	// export const prerender = true;

	// export async function load() {
	// 	const url = '/api/vacancies';
 	// 	const response = await fetch(url);

	// 	return {
	// 		status: response.status,
 	// 		props: {
 	// 			article: response.ok && (await response.json())
 	// 		}
	// 	};
	// }

	export async function load() {
        const getVacanciesUrl = 'http://localhost:3000/api/vacancies';
        const getCompaniesUrl = 'http://localhost:3000/api/companies';

        const getVacanciesResult = await fetch(getVacanciesUrl);
        const getCompaniesResult = await fetch(getCompaniesUrl);

        const vacancies = await getVacanciesResult.json();
        const companies = await getCompaniesResult.json();

        return {props: {vacancies, companies}};
    }
</script>

<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import Vacancy from '$lib/Vacancy.svelte';
	import FeaturedCompany from '$lib/FeaturedCompany.svelte';
	import Button from '$lib/Button.svelte';

	export let vacancies: any;
	console.log(vacancies);

	export let companies: any;
	console.log(companies);

	// let vacancyList = vacancies;

	// function addVacancy() {
	// 	vacancyList = vacancyList.concat({ 
	// 		id: 5,
    //     	logo: "images/apple.png",
    //     	title: "Apple Main Manager",
    //     	name: "Apple Inc.",
    //     	location: "Los Angeles",
    //     	isFullTime: true,
    //     	date: "April 12, 2020",
	// 	 });
	// }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main">
	<div class="container container-bg">
		<div class="main__content">
			<div class="main__text">
				<Heading size={1}>Search 7 Live Jobs</Heading>
				<p class="main__description">Finding your new job just got easier</p>
			</div>
		</div>
		<form action="#" class="main__form form">
			<div class="form__group _icon-search">
				<input type="text" placeholder="Search for job">
			</div>
			<div class="form__group _icon-location_on">
				<input type="text" placeholder="Set location">
			</div>
			<Button variant="blue">Search</Button>
		</form>
	</div>
</section>

<section class="vacancies">
	<div class="container container-sm">
		{#each vacancies as vacancy (vacancy.id)}
			<Vacancy {...vacancy} />
		{/each}
		<!-- {#if vacancies.length < 5}
			<Button on:click={addVacancy} variant="show">View All Job postings (5)</Button>
		{/if} -->
	</div>
</section>

<section class="sort">
	<div class="container container-em">
		<Heading size={3}>Sort By</Heading>
		<div class="sort__change">
			<Button variant="lightblue">Jobs by Category</Button>
			<Button variant="lightblue">Jobs by City</Button>
			<Button variant="lightblue">Jobs by State</Button>
		</div>
		<ul class="sort__list">
			<li><a href="/">Accounting (5)</a></li>
			<li><a href="/">Banking (1)</a></li>
			<li><a href="/">Human Resource (1)</a></li>
			<li><a href="/">Admin-Clerical (5)</a></li>
			<li><a href="/">Finance (5)</a></li>
			<li><a href="/">Management (1)</a></li>
		</ul>
	</div>
</section>

<section class="featured">
	<div class="container">
		<Heading size={2}>Featured Companies</Heading>
		<div class="companies">
			{#each companies as company (company.id)}
				<FeaturedCompany {...company} />
			{/each}
		</div>
	</div>
</section>