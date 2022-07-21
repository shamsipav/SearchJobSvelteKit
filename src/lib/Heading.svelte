<script lang="ts">
    export let size: number;
    const options: string[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    let selected: string = options[size - 1];
</script>

<svelte:element this={selected}>
    <slot/>
</svelte:element>

<style>
    :global(h1), :global(h2), :global(h3) {
        font-family: "Qanelas";
		font-weight: 800; 
    }
    :global(h1) {
        font-size: 48px;
        letter-spacing: 1.5px;
    }
    :global(h2), :global(h3) {
        letter-spacing: 1.2px;
        text-align: center;
    }
    :global(h2) {
        font-size: 32px;
    }
    :global(h3) {
        font-size: 28px;
    }
</style>