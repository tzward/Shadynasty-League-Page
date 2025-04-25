import {
    players,
    playerData,
} from '$lib/utils/helper';

export async function load() {
    if(!managers.length) return {managers};
    const playerData = players();

    const props = {
        players,
        playerData
    }

    return props;
}
