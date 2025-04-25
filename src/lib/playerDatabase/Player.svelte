<script>
	import LinearProgress from '@smui/linear-progress';
    import {Player} from '$lib/components';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	const {managers, manager, managersInfo} = data;

    onMount(() => {
        if(!managers.length) goto('/');
        if(manager < 0) goto("/managers");
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
