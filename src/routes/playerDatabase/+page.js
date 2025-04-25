import {
    loadPlayers as players
} from '$lib/utils/helper';

export async function load() {
    if(!players.length) return {players};
    const playerData = loadPlayers();

    const props = {
        players,
        playerData
    }

    return props;
}
