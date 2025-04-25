import {
    loadPlayers,
    playerData,
} from '$lib/utils/helper';

export async function load() {
    if(!players.length) return {players};
    const playerData = loadPlayers();

    const props = {
        loadPlayers,
        playerData
    }

    return props;
}
