<script>
	import NavSmall from './NavSmall.svelte';
	import NavLarge from './NavLarge.svelte';
    import { page } from '$app/state';
	import IconButton from '@smui/icon-button';
	import { Icon } from '@smui/common';

	// toggle dark mode
	let darkTheme = $state(typeof window === "undefined" || window.matchMedia("(prefers-color-scheme: dark)").matches);
	function switchTheme(currentTheme) {
		currentTheme = !currentTheme;
		let themeLink = document.head.querySelector("#theme");
		if (!themeLink) {
			themeLink = document.createElement("link");
			themeLink.rel = "stylesheet";
			themeLink.id = "theme";
		}
		themeLink.href = `/smui${currentTheme ? "" : "-dark"}.css`;
		document.head
		.querySelector('link[href="/smui-dark.css"]')
		.insertAdjacentElement("afterend", themeLink);
	}
</script>

<svelte:head>
	<title>{!page.url.pathname[1] ? 'Home' : page.url.pathname[1].toUpperCase() + page.url.pathname.slice(2)} | League Page</title>
</svelte:head>

<style>
	a {
		display: table;
    	margin: 0 auto;
	}
	nav {
		background-color: var(--fff);
		position: relative;
		z-index: 2;
	}

	.border1 {
		position: absolute;
		display: block;
		height: 2%;
		width: 100%;
		top: 0%;
		background-color: #CD3498; /* #ff4ba8 */
		box-shadow: 0 0 4px 4px #FDC2E1;
	}

	.border2 {
		position: absolute;
		display: block;
		height: 2%;
		width: 100%;
		top: 100%;
		background-color: #CD3498; /* #ff4ba8 */
		box-shadow: 0 0 4px 4px #FDC2E1;
	}

	.border3 {
		position: absolute;
		display: block;
		height: 96%;
		width: 1%;
		right: 0%;
		top: 3%;
		background-color: #CD3498; /* #ff4ba8 */
		box-shadow: 0 0 4px 4px #FDC2E1;
	}

	.border4 {
		position: absolute;
		display: block;
		height: 96%;
		width: 1%;
		right: 100%;
		top: 3%;
		background-color: #CD3498; /* #ff4ba8 */
		box-shadow: 0 0 4px 4px #FDC2E1;
	}

	#logo {
		width: 150px;
		display: block;
		margin: 0 auto;
		padding: 10px;
	}

    .large {
		display: block;
    }

	.small {
		display: none;
	}

	.container {
		position: absolute;
		top: 0.25em;
		right: 0.25em;
	}

	:global(.lightDark) {
		color: var(--g555)
	}

	@media (max-width: 950px) { /* width of the large navBar */
		.large {
			display: none;
		}

		.small {
			display: block;
		}
	}
</style>

<nav>
	<a href="/"><img id="logo" alt="league logo" src="/LeaguePhoto.png" /></a>

	<div class="border1"> </div>
	<div class="border2"> </div>
	<div class="border3"> </div>
	<div class="border4"> </div>

	<div class="container">
		<IconButton
			toggle
			bind:pressed={darkTheme}
			onclick={() => switchTheme(darkTheme)}
			class="lightDark"
		>
			<Icon class="material-icons" on>dark_mode</Icon>
			<Icon class="material-icons">light_mode</Icon>
		</IconButton>
	</div>

	<div class="large">
		<NavLarge />
	</div>

	<div class="small">
		<NavSmall />
	</div>

</nav>
