<script>
    import { loadPlayers } from '$lib/utils/helper';
    import PlayerRow from './PlayerRow.svelte'

    export let players;

    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<style>
    .playerContainer {
        width: 100%;
        margin: 2em 0 5em;
    }

    .playerConstrained {
        width: 97%;
        max-width: 800px;
        margin: 0 auto;
    }

    h2 {
        text-align: center;
        font-size: 2.8em;
        margin: 2em 0 1.5em;
        line-height: 1em;
    }

    @media (max-width: 520px) {
        h2 {
            text-align: center;
            font-size: 2em;
            margin: 1.5em 0 1em;
            line-height: 1em;
        }
    }
</style>

<div class="playerContainer">
    <h2>{leagueName} Players</h2>
    <div class="playerConstrained">
        {#each players as player, key}
            <PlayerRow {player} {loadPlayers} {key} />
        {/each}
    </div>

</div>
