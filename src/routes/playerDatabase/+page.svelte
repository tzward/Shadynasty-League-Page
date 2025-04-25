<script>
	import LinearProgress from '@smui/linear-progress';
    import {AllPlayers} from '$lib/components';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data;
	const {players, leagueTeamManagersData} = data;

    onMount(() => {
        if(!managers.length) {
            goto('/');
        }
    })
</script>

<style>
	.main {
		position: relative;
		z-index: 1;
	}
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }
</style>

<div class="main">
    {#await AllPlayers}
        <!-- promise is pending -->
        <div class="loading">
            <p>Retrieving players...</p>
            <LinearProgress indeterminate />
        </div>
    {:then AllPlayers}
        {#if players.length}
            <AllPlayers {players}  {playerInfo}/>
        {/if}
    {:catch error}
        <!-- promise was rejected -->
        <p>Something went wrong: {error.message}</p>
    {/await}
</div>
