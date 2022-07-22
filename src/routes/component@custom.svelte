<script lang="ts">
    import Step from '$lib/Step.svelte';
</script>

<Step num={1} title="Узнайте о поступлении" color="blue">
    <svelte:fragment slot="first">Правила приёма</svelte:fragment>
    <svelte:fragment slot="second">Сроки подачи документов</svelte:fragment>
    <svelte:fragment slot="third">Цифры приёма</svelte:fragment>
</Step>